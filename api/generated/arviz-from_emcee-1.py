import emcee
import numpy as np
import arviz as az
J = 8
y_obs = np.array([28.0, 8.0, -3.0, 7.0, -1.0, 1.0, 18.0, 12.0])
sigma = np.array([15.0, 10.0, 16.0, 11.0, 9.0, 11.0, 10.0, 18.0])
def log_prior_8school(theta):
    mu, tau, eta = theta[0], theta[1], theta[2:]
    # Half-cauchy prior, hwhm=25
    if tau < 0:
        return -np.inf
    prior_tau = -np.log(tau ** 2 + 25 ** 2)
    prior_mu = -(mu / 10) ** 2  # normal prior, loc=0, scale=10
    prior_eta = -np.sum(eta ** 2)  # normal prior, loc=0, scale=1
    return prior_mu + prior_tau + prior_eta
def log_likelihood_8school(theta, y, s):
    mu, tau, eta = theta[0], theta[1], theta[2:]
    return -((mu + tau * eta - y) / s) ** 2
def lnprob_8school(theta, y, s):
    prior = log_prior_8school(theta)
    like_vect = log_likelihood_8school(theta, y, s)
    like = np.sum(like_vect)
    return like + prior
nwalkers, draws = 50, 700
ndim = J + 2
pos = np.random.normal(size=(nwalkers, ndim))
pos[:, 1] = np.absolute(pos[:, 1])
sampler = emcee.EnsembleSampler(
    nwalkers,
    ndim,
    lnprob_8school,
    args=(y_obs, sigma)
)
sampler.run_mcmc(pos, draws);
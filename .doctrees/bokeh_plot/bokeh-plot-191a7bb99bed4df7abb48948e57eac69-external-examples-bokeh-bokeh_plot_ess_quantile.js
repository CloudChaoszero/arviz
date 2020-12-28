(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("8d036caa-6bfa-42b5-a3d5-9fa49bb6d357");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '8d036caa-6bfa-42b5-a3d5-9fa49bb6d357' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js": "T2yuo9Oe71Cz/I4X9Ac5+gpEa5a8PpJCDlqKYO0CfAuEszu1JrXLl8YugMqYe3sM", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js": "98GDGJ0kOMCUMUePhksaQ/GYgB3+NH9h996V88sh3aOiUNX3N+fLXAtry6xctSZ6", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js": "89bArO+nlbP3sgakeHjCo1JYxYR5wufVgA3IbUvDY+K7w4zyxJqssu7wVnfeKCq8"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"26d3fab3-6d7f-4bb6-81fd-6d8975f573ec":{"roots":{"references":[{"attributes":{},"id":"68355","type":"WheelZoomTool"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"68386"},"selection_policy":{"id":"68387"}},"id":"68371","type":"ColumnDataSource"},{"attributes":{},"id":"68345","type":"BasicTicker"},{"attributes":{"data_source":{"id":"68371"},"glyph":{"id":"68372"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68373"},"selection_glyph":null,"view":{"id":"68375"}},"id":"68374","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"68361"}},"id":"68356","type":"LassoSelectTool"},{"attributes":{},"id":"68386","type":"Selection"},{"attributes":{"children":[{"id":"68391"},{"id":"68389"}]},"id":"68392","type":"Column"},{"attributes":{},"id":"68349","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"68352"},{"id":"68353"},{"id":"68354"},{"id":"68355"},{"id":"68356"},{"id":"68357"},{"id":"68358"},{"id":"68359"}]},"id":"68362","type":"Toolbar"},{"attributes":{"source":{"id":"68371"}},"id":"68375","type":"CDSView"},{"attributes":{},"id":"68380","type":"BasicTickFormatter"},{"attributes":{},"id":"68338","type":"DataRange1d"},{"attributes":{},"id":"68387","type":"UnionRenderers"},{"attributes":{"below":[{"id":"68344"}],"center":[{"id":"68347"},{"id":"68351"}],"left":[{"id":"68348"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"68374"},{"id":"68376"}],"title":{"id":"68377"},"toolbar":{"id":"68362"},"toolbar_location":null,"x_range":{"id":"68336"},"x_scale":{"id":"68340"},"y_range":{"id":"68338"},"y_scale":{"id":"68342"}},"id":"68335","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"68360","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68372","type":"Circle"},{"attributes":{},"id":"68340","type":"LinearScale"},{"attributes":{"axis":{"id":"68348"},"dimension":1,"ticker":null},"id":"68351","type":"Grid"},{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"68382"},"ticker":{"id":"68349"}},"id":"68348","type":"LinearAxis"},{"attributes":{"text":"sigma"},"id":"68377","type":"Title"},{"attributes":{"overlay":{"id":"68360"}},"id":"68354","type":"BoxZoomTool"},{"attributes":{},"id":"68336","type":"DataRange1d"},{"attributes":{},"id":"68357","type":"UndoTool"},{"attributes":{"toolbar":{"id":"68390"},"toolbar_location":"above"},"id":"68391","type":"ToolbarBox"},{"attributes":{},"id":"68382","type":"BasicTickFormatter"},{"attributes":{},"id":"68352","type":"ResetTool"},{"attributes":{},"id":"68342","type":"LinearScale"},{"attributes":{"children":[[{"id":"68335"},0,0]]},"id":"68389","type":"GridBox"},{"attributes":{"axis":{"id":"68344"},"ticker":null},"id":"68347","type":"Grid"},{"attributes":{},"id":"68358","type":"SaveTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"68380"},"ticker":{"id":"68345"}},"id":"68344","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68373","type":"Circle"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"68376","type":"Span"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"68361","type":"PolyAnnotation"},{"attributes":{},"id":"68353","type":"PanTool"},{"attributes":{"toolbars":[{"id":"68362"}],"tools":[{"id":"68352"},{"id":"68353"},{"id":"68354"},{"id":"68355"},{"id":"68356"},{"id":"68357"},{"id":"68358"},{"id":"68359"}]},"id":"68390","type":"ProxyToolbar"},{"attributes":{"callback":null},"id":"68359","type":"HoverTool"}],"root_ids":["68392"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"26d3fab3-6d7f-4bb6-81fd-6d8975f573ec","root_ids":["68392"],"roots":{"68392":"8d036caa-6bfa-42b5-a3d5-9fa49bb6d357"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
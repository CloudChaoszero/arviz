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
    
      
      
    
      var element = document.getElementById("bdd07b7c-1e2b-4791-9337-95fb53175b42");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bdd07b7c-1e2b-4791-9337-95fb53175b42' but no matching script tag was found.")
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
                    
                  var docs_json = '{"b0df21cb-b327-4072-ac8c-c279a1b849b1":{"roots":{"references":[{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"85923","type":"Span"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"85949"},"selection_policy":{"id":"85950"}},"id":"85916","type":"ColumnDataSource"},{"attributes":{},"id":"85835","type":"LinearScale"},{"attributes":{"data_source":{"id":"85925"},"glyph":{"id":"85924"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"85927"}},"id":"85926","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85918","type":"Circle"},{"attributes":{"text":"mu"},"id":"85928","type":"Title"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"85922","type":"Span"},{"attributes":{"source":{"id":"85916"}},"id":"85920","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85917","type":"Circle"},{"attributes":{"data_source":{"id":"85916"},"glyph":{"id":"85917"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"85918"},"selection_glyph":null,"view":{"id":"85920"}},"id":"85919","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"85909","type":"Span"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"85891","type":"BoxAnnotation"},{"attributes":{"text":"tau"},"id":"85914","type":"Title"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"85924","type":"Dash"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"85921","type":"Span"},{"attributes":{},"id":"85949","type":"Selection"},{"attributes":{"axis":{"id":"85839"},"ticker":null},"id":"85842","type":"Grid"},{"attributes":{},"id":"85950","type":"UnionRenderers"},{"attributes":{"source":{"id":"85911"}},"id":"85913","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"85855","type":"BoxAnnotation"},{"attributes":{},"id":"85837","type":"LinearScale"},{"attributes":{},"id":"85937","type":"Selection"},{"attributes":{},"id":"85938","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"85892","type":"PolyAnnotation"},{"attributes":{},"id":"85951","type":"Selection"},{"attributes":{},"id":"85844","type":"BasicTicker"},{"attributes":{},"id":"85952","type":"UnionRenderers"},{"attributes":{},"id":"85939","type":"Selection"},{"attributes":{"axis":{"id":"85843"},"dimension":1,"ticker":null},"id":"85846","type":"Grid"},{"attributes":{},"id":"85940","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"85856","type":"PolyAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85903","type":"Circle"},{"attributes":{"children":[{"id":"85956"},{"id":"85954"}]},"id":"85957","type":"Column"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"85937"},"selection_policy":{"id":"85938"}},"id":"85902","type":"ColumnDataSource"},{"attributes":{"source":{"id":"85902"}},"id":"85906","type":"CDSView"},{"attributes":{"toolbars":[{"id":"85857"},{"id":"85893"}],"tools":[{"id":"85847"},{"id":"85848"},{"id":"85849"},{"id":"85850"},{"id":"85851"},{"id":"85852"},{"id":"85853"},{"id":"85854"},{"id":"85883"},{"id":"85884"},{"id":"85885"},{"id":"85886"},{"id":"85887"},{"id":"85888"},{"id":"85889"},{"id":"85890"}]},"id":"85955","type":"ProxyToolbar"},{"attributes":{"toolbar":{"id":"85955"},"toolbar_location":"above"},"id":"85956","type":"ToolbarBox"},{"attributes":{},"id":"85853","type":"SaveTool"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"85951"},"selection_policy":{"id":"85952"}},"id":"85925","type":"ColumnDataSource"},{"attributes":{},"id":"85831","type":"DataRange1d"},{"attributes":{"source":{"id":"85925"}},"id":"85927","type":"CDSView"},{"attributes":{},"id":"85943","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"85902"},"glyph":{"id":"85903"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"85904"},"selection_glyph":null,"view":{"id":"85906"}},"id":"85905","type":"GlyphRenderer"},{"attributes":{},"id":"85847","type":"ResetTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"85943"},"ticker":{"id":"85876"}},"id":"85875","type":"LinearAxis"},{"attributes":{"below":[{"id":"85875"}],"center":[{"id":"85878"},{"id":"85882"}],"left":[{"id":"85879"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"85919"},{"id":"85921"},{"id":"85922"},{"id":"85923"},{"id":"85926"}],"title":{"id":"85928"},"toolbar":{"id":"85893"},"toolbar_location":null,"x_range":{"id":"85867"},"x_scale":{"id":"85871"},"y_range":{"id":"85869"},"y_scale":{"id":"85873"}},"id":"85866","subtype":"Figure","type":"Plot"},{"attributes":{"end":1,"start":-0.05},"id":"85869","type":"DataRange1d"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"85945"},"ticker":{"id":"85880"}},"id":"85879","type":"LinearAxis"},{"attributes":{},"id":"85848","type":"PanTool"},{"attributes":{},"id":"85871","type":"LinearScale"},{"attributes":{},"id":"85931","type":"BasicTickFormatter"},{"attributes":{},"id":"85873","type":"LinearScale"},{"attributes":{"children":[[{"id":"85830"},0,0],[{"id":"85866"},0,1]]},"id":"85954","type":"GridBox"},{"attributes":{"overlay":{"id":"85855"}},"id":"85849","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"85890","type":"HoverTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"85931"},"ticker":{"id":"85840"}},"id":"85839","type":"LinearAxis"},{"attributes":{},"id":"85852","type":"UndoTool"},{"attributes":{},"id":"85876","type":"BasicTicker"},{"attributes":{},"id":"85867","type":"DataRange1d"},{"attributes":{"axis":{"id":"85875"},"ticker":null},"id":"85878","type":"Grid"},{"attributes":{"below":[{"id":"85839"}],"center":[{"id":"85842"},{"id":"85846"}],"left":[{"id":"85843"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"85905"},{"id":"85907"},{"id":"85908"},{"id":"85909"},{"id":"85912"}],"title":{"id":"85914"},"toolbar":{"id":"85857"},"toolbar_location":null,"x_range":{"id":"85831"},"x_scale":{"id":"85835"},"y_range":{"id":"85833"},"y_scale":{"id":"85837"}},"id":"85830","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"85854","type":"HoverTool"},{"attributes":{"axis":{"id":"85879"},"dimension":1,"ticker":null},"id":"85882","type":"Grid"},{"attributes":{},"id":"85880","type":"BasicTicker"},{"attributes":{"data_source":{"id":"85911"},"glyph":{"id":"85910"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"85913"}},"id":"85912","type":"GlyphRenderer"},{"attributes":{},"id":"85945","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85904","type":"Circle"},{"attributes":{},"id":"85850","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"85891"}},"id":"85885","type":"BoxZoomTool"},{"attributes":{"end":1,"start":-0.05},"id":"85833","type":"DataRange1d"},{"attributes":{},"id":"85884","type":"PanTool"},{"attributes":{},"id":"85883","type":"ResetTool"},{"attributes":{},"id":"85889","type":"SaveTool"},{"attributes":{},"id":"85840","type":"BasicTicker"},{"attributes":{},"id":"85886","type":"WheelZoomTool"},{"attributes":{},"id":"85933","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"85892"}},"id":"85887","type":"LassoSelectTool"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"85933"},"ticker":{"id":"85844"}},"id":"85843","type":"LinearAxis"},{"attributes":{},"id":"85888","type":"UndoTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"85883"},{"id":"85884"},{"id":"85885"},{"id":"85886"},{"id":"85887"},{"id":"85888"},{"id":"85889"},{"id":"85890"}]},"id":"85893","type":"Toolbar"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"85908","type":"Span"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"85847"},{"id":"85848"},{"id":"85849"},{"id":"85850"},{"id":"85851"},{"id":"85852"},{"id":"85853"},{"id":"85854"}]},"id":"85857","type":"Toolbar"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"85939"},"selection_policy":{"id":"85940"}},"id":"85911","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"85856"}},"id":"85851","type":"LassoSelectTool"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"85907","type":"Span"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"85910","type":"Dash"}],"root_ids":["85957"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"b0df21cb-b327-4072-ac8c-c279a1b849b1","root_ids":["85957"],"roots":{"85957":"bdd07b7c-1e2b-4791-9337-95fb53175b42"}}];
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
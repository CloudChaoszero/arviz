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
    
      
      
    
      var element = document.getElementById("5195e190-6d4b-4f9f-9dde-66314fcf5542");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '5195e190-6d4b-4f9f-9dde-66314fcf5542' but no matching script tag was found.")
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
                    
                  var docs_json = '{"7de7be69-94b1-475e-99e7-3c695c9af8db":{"roots":{"references":[{"attributes":{"toolbar":{"id":"67897"},"toolbar_location":"above"},"id":"67898","type":"ToolbarBox"},{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"67880","type":"Cross"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"67893"},"selection_policy":{"id":"67894"}},"id":"67881","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"67853"},"ticker":null},"id":"67856","type":"Grid"},{"attributes":{},"id":"67889","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"67870","type":"PolyAnnotation"},{"attributes":{"overlay":{"id":"67869"}},"id":"67863","type":"BoxZoomTool"},{"attributes":{},"id":"67847","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"67869","type":"BoxAnnotation"},{"attributes":{"source":{"id":"67881"}},"id":"67883","type":"CDSView"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"67884","type":"Title"},{"attributes":{"axis":{"id":"67857"},"dimension":1,"ticker":null},"id":"67860","type":"Grid"},{"attributes":{},"id":"67864","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"67868","type":"HoverTool"},{"attributes":{},"id":"67861","type":"ResetTool"},{"attributes":{},"id":"67867","type":"SaveTool"},{"attributes":{},"id":"67862","type":"PanTool"},{"attributes":{"children":[{"id":"67898"},{"id":"67896"}]},"id":"67899","type":"Column"},{"attributes":{},"id":"67887","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"67887"},"ticker":{"id":"67854"}},"id":"67853","type":"LinearAxis"},{"attributes":{},"id":"67866","type":"UndoTool"},{"attributes":{"toolbars":[{"id":"67871"}],"tools":[{"id":"67861"},{"id":"67862"},{"id":"67863"},{"id":"67864"},{"id":"67865"},{"id":"67866"},{"id":"67867"},{"id":"67868"}]},"id":"67897","type":"ProxyToolbar"},{"attributes":{},"id":"67893","type":"Selection"},{"attributes":{},"id":"67854","type":"BasicTicker"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"67889"},"ticker":{"id":"67858"}},"id":"67857","type":"LinearAxis"},{"attributes":{"overlay":{"id":"67870"}},"id":"67865","type":"LassoSelectTool"},{"attributes":{},"id":"67894","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"67881"},"glyph":{"id":"67880"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"67883"}},"id":"67882","type":"GlyphRenderer"},{"attributes":{"children":[[{"id":"67844"},0,0]]},"id":"67896","type":"GridBox"},{"attributes":{},"id":"67858","type":"BasicTicker"},{"attributes":{},"id":"67849","type":"LinearScale"},{"attributes":{"below":[{"id":"67853"}],"center":[{"id":"67856"},{"id":"67860"}],"left":[{"id":"67857"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"67882"}],"title":{"id":"67884"},"toolbar":{"id":"67871"},"toolbar_location":null,"x_range":{"id":"67845"},"x_scale":{"id":"67849"},"y_range":{"id":"67847"},"y_scale":{"id":"67851"}},"id":"67844","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"67861"},{"id":"67862"},{"id":"67863"},{"id":"67864"},{"id":"67865"},{"id":"67866"},{"id":"67867"},{"id":"67868"}]},"id":"67871","type":"Toolbar"},{"attributes":{},"id":"67851","type":"LinearScale"},{"attributes":{},"id":"67845","type":"DataRange1d"}],"root_ids":["67899"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"7de7be69-94b1-475e-99e7-3c695c9af8db","root_ids":["67899"],"roots":{"67899":"5195e190-6d4b-4f9f-9dde-66314fcf5542"}}];
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
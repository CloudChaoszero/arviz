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
    
      
      
    
      var element = document.getElementById("78cdd579-a635-4ebe-aa71-b11cb9d12e9c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '78cdd579-a635-4ebe-aa71-b11cb9d12e9c' but no matching script tag was found.")
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
                    
                  var docs_json = '{"d16cc01f-d6a5-4aa5-ad16-f2c365a29104":{"roots":{"references":[{"attributes":{},"id":"64939","type":"UnionRenderers"},{"attributes":{"text":"centered model - non centered model"},"id":"64929","type":"Title"},{"attributes":{"axis":{"id":"64902"},"dimension":1,"ticker":null},"id":"64905","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"64914","type":"BoxAnnotation"},{"attributes":{},"id":"64906","type":"ResetTool"},{"attributes":{"callback":null},"id":"64913","type":"HoverTool"},{"attributes":{},"id":"64903","type":"BasicTicker"},{"attributes":{},"id":"64934","type":"BasicTickFormatter"},{"attributes":{"children":[[{"id":"64889"},0,0]]},"id":"64941","type":"GridBox"},{"attributes":{},"id":"64907","type":"PanTool"},{"attributes":{"axis":{"id":"64898"},"ticker":null},"id":"64901","type":"Grid"},{"attributes":{},"id":"64909","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"64915"}},"id":"64910","type":"LassoSelectTool"},{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"64925","type":"Cross"},{"attributes":{},"id":"64899","type":"BasicTicker"},{"attributes":{},"id":"64938","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"64906"},{"id":"64907"},{"id":"64908"},{"id":"64909"},{"id":"64910"},{"id":"64911"},{"id":"64912"},{"id":"64913"}]},"id":"64916","type":"Toolbar"},{"attributes":{},"id":"64932","type":"BasicTickFormatter"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"64934"},"ticker":{"id":"64903"}},"id":"64902","type":"LinearAxis"},{"attributes":{"toolbars":[{"id":"64916"}],"tools":[{"id":"64906"},{"id":"64907"},{"id":"64908"},{"id":"64909"},{"id":"64910"},{"id":"64911"},{"id":"64912"},{"id":"64913"}]},"id":"64942","type":"ProxyToolbar"},{"attributes":{},"id":"64911","type":"UndoTool"},{"attributes":{"formatter":{"id":"64932"},"ticker":{"id":"64899"}},"id":"64898","type":"LinearAxis"},{"attributes":{},"id":"64892","type":"DataRange1d"},{"attributes":{},"id":"64896","type":"LinearScale"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"64915","type":"PolyAnnotation"},{"attributes":{"children":[{"id":"64943"},{"id":"64941"}]},"id":"64944","type":"Column"},{"attributes":{},"id":"64894","type":"LinearScale"},{"attributes":{"overlay":{"id":"64914"}},"id":"64908","type":"BoxZoomTool"},{"attributes":{},"id":"64890","type":"DataRange1d"},{"attributes":{"below":[{"id":"64898"}],"center":[{"id":"64901"},{"id":"64905"}],"left":[{"id":"64902"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"64927"}],"title":{"id":"64929"},"toolbar":{"id":"64916"},"toolbar_location":null,"x_range":{"id":"64890"},"x_scale":{"id":"64894"},"y_range":{"id":"64892"},"y_scale":{"id":"64896"}},"id":"64889","subtype":"Figure","type":"Plot"},{"attributes":{"toolbar":{"id":"64942"},"toolbar_location":"above"},"id":"64943","type":"ToolbarBox"},{"attributes":{"data_source":{"id":"64926"},"glyph":{"id":"64925"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"64928"}},"id":"64927","type":"GlyphRenderer"},{"attributes":{"source":{"id":"64926"}},"id":"64928","type":"CDSView"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"64938"},"selection_policy":{"id":"64939"}},"id":"64926","type":"ColumnDataSource"},{"attributes":{},"id":"64912","type":"SaveTool"}],"root_ids":["64944"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"d16cc01f-d6a5-4aa5-ad16-f2c365a29104","root_ids":["64944"],"roots":{"64944":"78cdd579-a635-4ebe-aa71-b11cb9d12e9c"}}];
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
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
    
      
      
    
      var element = document.getElementById("8352f276-ab55-448e-b776-9f3669accf30");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '8352f276-ab55-448e-b776-9f3669accf30' but no matching script tag was found.")
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
                    
                  var docs_json = '{"6a6e933e-c22a-4475-b365-6769bde03a2b":{"roots":{"references":[{"attributes":{},"id":"65676","type":"PanTool"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65707","type":"Circle"},{"attributes":{"below":[{"id":"65667"}],"center":[{"id":"65670"},{"id":"65674"}],"left":[{"id":"65671"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"65699"},{"id":"65704"},{"id":"65709"},{"id":"65714"},{"id":"65719"},{"id":"65721"}],"title":{"id":"65722"},"toolbar":{"id":"65685"},"toolbar_location":null,"x_range":{"id":"65659"},"x_scale":{"id":"65663"},"y_range":{"id":"65661"},"y_scale":{"id":"65665"}},"id":"65658","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65697","type":"Triangle"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"65702","type":"MultiLine"},{"attributes":{"axis":{"id":"65667"},"ticker":null},"id":"65670","type":"Grid"},{"attributes":{"text":""},"id":"65722","type":"Title"},{"attributes":{"axis":{"id":"65671"},"dimension":1,"ticker":null},"id":"65674","type":"Grid"},{"attributes":{},"id":"65681","type":"SaveTool"},{"attributes":{},"id":"65659","type":"DataRange1d"},{"attributes":{},"id":"65665","type":"LinearScale"},{"attributes":{"children":[{"id":"65742"},{"id":"65740"}]},"id":"65743","type":"Column"},{"attributes":{},"id":"65729","type":"Selection"},{"attributes":{},"id":"65735","type":"Selection"},{"attributes":{"data_source":{"id":"65711"},"glyph":{"id":"65712"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65713"},"selection_glyph":null,"view":{"id":"65715"}},"id":"65714","type":"GlyphRenderer"},{"attributes":{"end":0.5,"start":-1.5},"id":"65661","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"65703","type":"MultiLine"},{"attributes":{},"id":"65738","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"65684"}},"id":"65679","type":"LassoSelectTool"},{"attributes":{},"id":"65663","type":"LinearScale"},{"attributes":{"overlay":{"id":"65683"}},"id":"65677","type":"BoxZoomTool"},{"attributes":{"data":{"xs":[[-30.896420573800537,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"65731"},"selection_policy":{"id":"65732"}},"id":"65701","type":"ColumnDataSource"},{"attributes":{"toolbar":{"id":"65741"},"toolbar_location":"above"},"id":"65742","type":"ToolbarBox"},{"attributes":{"axis_label":"Log","formatter":{"id":"65724"},"ticker":{"id":"65668"}},"id":"65667","type":"LinearAxis"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.38353713483674]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"65735"},"selection_policy":{"id":"65736"}},"id":"65711","type":"ColumnDataSource"},{"attributes":{},"id":"65726","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"65706"}},"id":"65710","type":"CDSView"},{"attributes":{"callback":null},"id":"65682","type":"HoverTool"},{"attributes":{"source":{"id":"65696"}},"id":"65700","type":"CDSView"},{"attributes":{},"id":"65732","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"65701"},"glyph":{"id":"65702"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65703"},"selection_glyph":null,"view":{"id":"65705"}},"id":"65704","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"65696"},"glyph":{"id":"65697"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65698"},"selection_glyph":null,"view":{"id":"65700"}},"id":"65699","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"KAWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"65729"},"selection_policy":{"id":"65730"}},"id":"65696","type":"ColumnDataSource"},{"attributes":{"source":{"id":"65716"}},"id":"65720","type":"CDSView"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"65684","type":"PolyAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"65675"},{"id":"65676"},{"id":"65677"},{"id":"65678"},{"id":"65679"},{"id":"65680"},{"id":"65681"},{"id":"65682"}]},"id":"65685","type":"Toolbar"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"65712","type":"MultiLine"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"65713","type":"MultiLine"},{"attributes":{"data_source":{"id":"65706"},"glyph":{"id":"65707"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65708"},"selection_glyph":null,"view":{"id":"65710"}},"id":"65709","type":"GlyphRenderer"},{"attributes":{},"id":"65733","type":"Selection"},{"attributes":{"children":[[{"id":"65658"},0,0]]},"id":"65740","type":"GridBox"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65718","type":"Circle"},{"attributes":{},"id":"65724","type":"BasicTickFormatter"},{"attributes":{},"id":"65730","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65708","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"65683","type":"BoxAnnotation"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsAoBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"65733"},"selection_policy":{"id":"65734"}},"id":"65706","type":"ColumnDataSource"},{"attributes":{"source":{"id":"65711"}},"id":"65715","type":"CDSView"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"65694","type":"FixedTicker"},{"attributes":{},"id":"65680","type":"UndoTool"},{"attributes":{"source":{"id":"65701"}},"id":"65705","type":"CDSView"},{"attributes":{"toolbars":[{"id":"65685"}],"tools":[{"id":"65675"},{"id":"65676"},{"id":"65677"},{"id":"65678"},{"id":"65679"},{"id":"65680"},{"id":"65681"},{"id":"65682"}]},"id":"65741","type":"ProxyToolbar"},{"attributes":{},"id":"65678","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"65726"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"ticker":{"id":"65694"}},"id":"65671","type":"LinearAxis"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"65721","type":"Span"},{"attributes":{"data_source":{"id":"65716"},"glyph":{"id":"65717"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65718"},"selection_glyph":null,"view":{"id":"65720"}},"id":"65719","type":"GlyphRenderer"},{"attributes":{},"id":"65737","type":"Selection"},{"attributes":{},"id":"65675","type":"ResetTool"},{"attributes":{},"id":"65668","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65698","type":"Triangle"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"65737"},"selection_policy":{"id":"65738"}},"id":"65716","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65717","type":"Circle"},{"attributes":{},"id":"65736","type":"UnionRenderers"},{"attributes":{},"id":"65731","type":"Selection"},{"attributes":{},"id":"65734","type":"UnionRenderers"}],"root_ids":["65743"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"6a6e933e-c22a-4475-b365-6769bde03a2b","root_ids":["65743"],"roots":{"65743":"8352f276-ab55-448e-b776-9f3669accf30"}}];
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
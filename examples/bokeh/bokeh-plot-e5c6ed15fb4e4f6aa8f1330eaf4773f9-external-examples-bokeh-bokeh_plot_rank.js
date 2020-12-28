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
    
      
      
    
      var element = document.getElementById("9ae71a10-5924-4ac8-8280-901484919356");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '9ae71a10-5924-4ac8-8280-901484919356' but no matching script tag was found.")
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
                    
                  var docs_json = '{"9e905cf9-5cad-4581-beb0-1cd9ffd30db7":{"roots":{"references":[{"attributes":{},"id":"90718","type":"LinearScale"},{"attributes":{},"id":"90815","type":"Selection"},{"attributes":{"children":[[{"id":"90677"},0,0],[{"id":"90713"},0,1]]},"id":"90833","type":"GridBox"},{"attributes":{"axis":{"id":"90690"},"dimension":1,"ticker":null},"id":"90693","type":"Grid"},{"attributes":{},"id":"90816","type":"UnionRenderers"},{"attributes":{},"id":"90694","type":"ResetTool"},{"attributes":{"overlay":{"id":"90702"}},"id":"90696","type":"BoxZoomTool"},{"attributes":{},"id":"90699","type":"UndoTool"},{"attributes":{},"id":"90684","type":"LinearScale"},{"attributes":{},"id":"90700","type":"SaveTool"},{"attributes":{},"id":"90806","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"90703","type":"PolyAnnotation"},{"attributes":{"ticks":[0,1,2,3]},"id":"90771","type":"FixedTicker"},{"attributes":{},"id":"90687","type":"BasicTicker"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"90804"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"90687"}},"id":"90686","type":"LinearAxis"},{"attributes":{},"id":"90826","type":"Selection"},{"attributes":{},"id":"90827","type":"UnionRenderers"},{"attributes":{"axis":{"id":"90720"},"ticker":null},"id":"90723","type":"Grid"},{"attributes":{"overlay":{"id":"90703"}},"id":"90698","type":"LassoSelectTool"},{"attributes":{"axis":{"id":"90686"},"ticker":null},"id":"90689","type":"Grid"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90809"},"selection_policy":{"id":"90810"}},"id":"90747","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"90747"},"glyph":{"id":"90748"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90749"},"selection_glyph":null,"view":{"id":"90751"}},"id":"90750","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90749","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90755","type":"VBar"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"90758","type":"Span"},{"attributes":{},"id":"90828","type":"Selection"},{"attributes":{"source":{"id":"90747"}},"id":"90751","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90811"},"selection_policy":{"id":"90812"}},"id":"90753","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90754","type":"VBar"},{"attributes":{"source":{"id":"90753"}},"id":"90757","type":"CDSView"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90761","type":"VBar"},{"attributes":{"callback":null},"id":"90735","type":"HoverTool"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"90764","type":"Span"},{"attributes":{"axis_label":"Chain","formatter":{"id":"90821"},"ticker":{"id":"90799"}},"id":"90724","type":"LinearAxis"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90760","type":"VBar"},{"attributes":{"data_source":{"id":"90753"},"glyph":{"id":"90754"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90755"},"selection_glyph":null,"view":{"id":"90757"}},"id":"90756","type":"GlyphRenderer"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"90819"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"90721"}},"id":"90720","type":"LinearAxis"},{"attributes":{"children":[{"id":"90835"},{"id":"90833"}]},"id":"90836","type":"Column"},{"attributes":{},"id":"90721","type":"BasicTicker"},{"attributes":{},"id":"90819","type":"BasicTickFormatter"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90813"},"selection_policy":{"id":"90814"}},"id":"90759","type":"ColumnDataSource"},{"attributes":{"source":{"id":"90759"}},"id":"90763","type":"CDSView"},{"attributes":{"below":[{"id":"90720"}],"center":[{"id":"90723"},{"id":"90727"},{"id":"90780"},{"id":"90786"},{"id":"90792"},{"id":"90798"}],"left":[{"id":"90724"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"90778"},{"id":"90784"},{"id":"90790"},{"id":"90796"}],"title":{"id":"90801"},"toolbar":{"id":"90738"},"toolbar_location":null,"x_range":{"id":"90678"},"x_scale":{"id":"90716"},"y_range":{"id":"90680"},"y_scale":{"id":"90718"}},"id":"90713","subtype":"Figure","type":"Plot"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90767","type":"VBar"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"90770","type":"Span"},{"attributes":{"axis":{"id":"90724"},"dimension":1,"ticker":null},"id":"90727","type":"Grid"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90766","type":"VBar"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90748","type":"VBar"},{"attributes":{"data_source":{"id":"90759"},"glyph":{"id":"90760"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90761"},"selection_glyph":null,"view":{"id":"90763"}},"id":"90762","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"90736"}},"id":"90730","type":"BoxZoomTool"},{"attributes":{},"id":"90729","type":"PanTool"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90815"},"selection_policy":{"id":"90816"}},"id":"90765","type":"ColumnDataSource"},{"attributes":{},"id":"90728","type":"ResetTool"},{"attributes":{"source":{"id":"90765"}},"id":"90769","type":"CDSView"},{"attributes":{},"id":"90821","type":"BasicTickFormatter"},{"attributes":{},"id":"90734","type":"SaveTool"},{"attributes":{"ticks":[0,1,2,3]},"id":"90799","type":"FixedTicker"},{"attributes":{},"id":"90831","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"90775"},"glyph":{"id":"90776"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90777"},"selection_glyph":null,"view":{"id":"90779"}},"id":"90778","type":"GlyphRenderer"},{"attributes":{},"id":"90829","type":"UnionRenderers"},{"attributes":{},"id":"90731","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90777","type":"VBar"},{"attributes":{},"id":"90809","type":"Selection"},{"attributes":{"overlay":{"id":"90737"}},"id":"90732","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"90765"},"glyph":{"id":"90766"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90767"},"selection_glyph":null,"view":{"id":"90769"}},"id":"90768","type":"GlyphRenderer"},{"attributes":{},"id":"90810","type":"UnionRenderers"},{"attributes":{},"id":"90733","type":"UndoTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"90728"},{"id":"90729"},{"id":"90730"},{"id":"90731"},{"id":"90732"},{"id":"90733"},{"id":"90734"},{"id":"90735"}]},"id":"90738","type":"Toolbar"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90824"},"selection_policy":{"id":"90825"}},"id":"90775","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"90702","type":"BoxAnnotation"},{"attributes":{},"id":"90804","type":"BasicTickFormatter"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"90780","type":"Span"},{"attributes":{},"id":"90697","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90776","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90783","type":"VBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"90694"},{"id":"90695"},{"id":"90696"},{"id":"90697"},{"id":"90698"},{"id":"90699"},{"id":"90700"},{"id":"90701"}]},"id":"90704","type":"Toolbar"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"90786","type":"Span"},{"attributes":{"source":{"id":"90775"}},"id":"90779","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90826"},"selection_policy":{"id":"90827"}},"id":"90781","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"90686"}],"center":[{"id":"90689"},{"id":"90693"},{"id":"90752"},{"id":"90758"},{"id":"90764"},{"id":"90770"}],"left":[{"id":"90690"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"90750"},{"id":"90756"},{"id":"90762"},{"id":"90768"}],"title":{"id":"90773"},"toolbar":{"id":"90704"},"toolbar_location":null,"x_range":{"id":"90678"},"x_scale":{"id":"90682"},"y_range":{"id":"90680"},"y_scale":{"id":"90684"}},"id":"90677","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"90701","type":"HoverTool"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90782","type":"VBar"},{"attributes":{},"id":"90811","type":"Selection"},{"attributes":{},"id":"90695","type":"PanTool"},{"attributes":{"toolbar":{"id":"90834"},"toolbar_location":"above"},"id":"90835","type":"ToolbarBox"},{"attributes":{},"id":"90812","type":"UnionRenderers"},{"attributes":{"source":{"id":"90781"}},"id":"90785","type":"CDSView"},{"attributes":{},"id":"90830","type":"Selection"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90789","type":"VBar"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"90792","type":"Span"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90788","type":"VBar"},{"attributes":{"data_source":{"id":"90781"},"glyph":{"id":"90782"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90783"},"selection_glyph":null,"view":{"id":"90785"}},"id":"90784","type":"GlyphRenderer"},{"attributes":{},"id":"90682","type":"LinearScale"},{"attributes":{},"id":"90680","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"90736","type":"BoxAnnotation"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90828"},"selection_policy":{"id":"90829"}},"id":"90787","type":"ColumnDataSource"},{"attributes":{"source":{"id":"90787"}},"id":"90791","type":"CDSView"},{"attributes":{"axis_label":"Chain","formatter":{"id":"90806"},"ticker":{"id":"90771"}},"id":"90690","type":"LinearAxis"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90795","type":"VBar"},{"attributes":{},"id":"90716","type":"LinearScale"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"90798","type":"Span"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90794","type":"VBar"},{"attributes":{},"id":"90813","type":"Selection"},{"attributes":{"data_source":{"id":"90787"},"glyph":{"id":"90788"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90789"},"selection_glyph":null,"view":{"id":"90791"}},"id":"90790","type":"GlyphRenderer"},{"attributes":{},"id":"90814","type":"UnionRenderers"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90830"},"selection_policy":{"id":"90831"}},"id":"90793","type":"ColumnDataSource"},{"attributes":{"source":{"id":"90793"}},"id":"90797","type":"CDSView"},{"attributes":{"toolbars":[{"id":"90704"},{"id":"90738"}],"tools":[{"id":"90694"},{"id":"90695"},{"id":"90696"},{"id":"90697"},{"id":"90698"},{"id":"90699"},{"id":"90700"},{"id":"90701"},{"id":"90728"},{"id":"90729"},{"id":"90730"},{"id":"90731"},{"id":"90732"},{"id":"90733"},{"id":"90734"},{"id":"90735"}]},"id":"90834","type":"ProxyToolbar"},{"attributes":{"text":"mu"},"id":"90801","type":"Title"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"90752","type":"Span"},{"attributes":{"data_source":{"id":"90793"},"glyph":{"id":"90794"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90795"},"selection_glyph":null,"view":{"id":"90797"}},"id":"90796","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"90737","type":"PolyAnnotation"},{"attributes":{"text":"tau"},"id":"90773","type":"Title"},{"attributes":{},"id":"90678","type":"DataRange1d"},{"attributes":{},"id":"90824","type":"Selection"},{"attributes":{},"id":"90825","type":"UnionRenderers"}],"root_ids":["90836"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"9e905cf9-5cad-4581-beb0-1cd9ffd30db7","root_ids":["90836"],"roots":{"90836":"9ae71a10-5924-4ac8-8280-901484919356"}}];
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
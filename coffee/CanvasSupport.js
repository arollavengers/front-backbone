// Generated by CoffeeScript 1.3.3
(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.CanvasSupport = (function() {

    function CanvasSupport(canvas) {
      var html;
      this.canvas = canvas;
      if (document.defaultView && document.defaultView.getComputedStyle) {
        this.stylePaddingLeft = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingLeft'], 10) || 0;
        this.stylePaddingTop = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingTop'], 10) || 0;
        this.styleBorderLeft = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderLeftWidth'], 10) || 0;
        this.styleBorderTop = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderTopWidth'], 10) || 0;
      }
      html = document.body.parentNode;
      this.htmlTop = html.offsetTop;
      this.htmlLeft = html.offsetLeft;
    }

    CanvasSupport.prototype.mousePosition = function(e) {
      var doWhile, element, mx, my, offsetParent, offsetX, offsetY;
      element = this.canvas;
      offsetX = 0;
      offsetY = 0;
      doWhile = function(func, condition) {
        var _results;
        func();
        _results = [];
        while (condition()) {
          _results.push(func());
        }
        return _results;
      };
      while (element.offsetParent) {
        offsetX += element.offsetLeft;
        offsetY += element.offsetTop;
        element = element.offsetParent;
      }
      offsetParent = element;
      while (!(offsetParent === null || typeof offsetParent === "undefined")) {
        offsetX += element.offsetLeft;
        offsetY += element.offsetTop;
        offsetParent = offsetParent.offsetParent;
      }
      offsetX += this.stylePaddingLeft + this.styleBorderLeft + this.htmlLeft;
      offsetY += this.stylePaddingTop + this.styleBorderTop + this.htmlTop;
      mx = e.pageX - offsetX;
      my = e.pageY - offsetY;
      return {
        x: mx,
        y: my
      };
    };

    return CanvasSupport;

  })();

}).call(this);
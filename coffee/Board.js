// Generated by CoffeeScript 1.3.3
(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.Board = (function() {

    function Board(dots) {
      this.dots = dots;
      this.radius = 2.1;
    }

    Board.prototype.draw = function(context) {
      var dot, _i, _len, _ref;
      console.log("drawing board " + (typeof context) + " #" + this.dots.length + " radius: " + this.radius);
      _ref = this.dots;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        dot = _ref[_i];
        this.drawDot(context, dot);
      }
      return this;
    };

    Board.prototype.drawDot = function(context, dot, color) {
      context.beginPath();
      context.arc(dot[0], dot[1], this.radius, 0, 2 * Math.PI, false);
      context.fillStyle = color || "#00aeef";
      context.fill();
      context.lineWidth = 1;
      context.strokeStyle = "#00a9ea";
      return context.stroke();
    };

    Board.prototype.findDotsWithinRadius = function(position, radius, cb) {
      var dot, dx, dy, r2, _i, _len, _ref;
      r2 = radius * radius;
      _ref = this.dots;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        dot = _ref[_i];
        dx = dot[0] - position.x;
        dy = dot[1] - position.y;
        if ((dx * dx + dy * dy) < r2) {
          cb(dot);
        }
      }
      return this;
    };

    return Board;

  })();

}).call(this);

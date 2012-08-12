var drawDotKineticJS = function(layers, dot) {
	var x = dot[0];
    var y = dot[1];
    var radius = 2.1;

    var circle = new Kinetic.Circle({
          x: x,
          y: y,
          radius: 3.5,
          fill: "#00aeef" /*,
          stroke: "#00a9ea",
          strokeWidth: 1*/
        });

    // add the shapes to the layer
    var layer = layers[Math.floor(x/50)+Math.floor(y/50)*19];
    layer.add(circle);

    circle.on("mouseover", function() {
    	writeMessage("x: " + x + ", y: " + y);
      	circle.setFill('#efae00');
      	layer.draw();
    });
    circle.on("mouseout", function() {
      	writeMessage("");
      	circle.setFill('#00aeef');
      	layer.draw();
    });
}

var drawDotCanvas = function(ctx, dot, color) {
    var x = dot[0];
    var y = dot[1];
    var radius = 2.1;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0 , 2 * Math.PI, false);
    ctx.fillStyle = color||"#00aeef";
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#00a9ea";
    ctx.stroke();
}

var drawDotLeg = function(ctx, dot) {
    ctx.fillStyle = "#00aeef";
    ctx.beginPath();
    ctx.moveTo(dot[0][0],dot[0][1]);
    ctx.bezierCurveTo(dot[1][0], dot[1][1], dot[1][2], dot[1][3], dot[1][4], dot[1][5]);
    if(dot.length>2) {
        ctx.bezierCurveTo(dot[2][0], dot[2][1], dot[2][2], dot[2][3], dot[2][4], dot[2][5]);
    }
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();    
}

var drawDotted = function(ctx, mapData, drawDot) {
    for (var i = 0; i < mapData.length; i++) {
        var dot = mapData[i];
        drawDot(ctx, dot);
    }
};


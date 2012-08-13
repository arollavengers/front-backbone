root = exports ? this
class root.Board
    
    constructor: (@dots) ->
        @radius = 2.1

    draw: (context)->
        console.log "drawing board #{typeof context} ##{@dots.length} radius: #{@radius}"
        for dot in @dots
            @drawDot context, dot
        this

    drawDot: (context, dot, color)->
        context.beginPath()
        context.arc dot[0], dot[1], @radius, 0 , 2 * Math.PI, false
        context.fillStyle = color||"#00aeef"
        context.fill()
        context.lineWidth = 1
        context.strokeStyle = "#00a9ea"
        context.stroke()

    findDotsWithinRadius: (position, radius, cb)->
        r2 = radius*radius
        for dot in @dots
            dx = dot[0]-position.x
            dy = dot[1]-position.y
            if((dx*dx+dy*dy)<r2)
                cb(dot)
        this
root = exports ? this
class root.CanvasSupport
    constructor: (@canvas)->
        # This complicates things a little but but fixes mouse co-ordinate problems
        # when there's a border or padding. See getMouse for more detail
        if (document.defaultView && document.defaultView.getComputedStyle)
            @stylePaddingLeft = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingLeft'], 10)      || 0;
            @stylePaddingTop  = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingTop'], 10)       || 0;
            @styleBorderLeft  = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderLeftWidth'], 10)  || 0;
            @styleBorderTop   = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderTopWidth'], 10)   || 0;
        # Some pages have fixed-position bars (like the stumbleupon bar) at the top or left of the page
        # They will mess up mouse coordinates and this fixes that
        html = document.body.parentNode
        @htmlTop = html.offsetTop
        @htmlLeft = html.offsetLeft

    mousePosition: (e)->
        element = @canvas
        offsetX = 0
        offsetY = 0

        doWhile = (func, condition) ->
              func()
              func() while condition()
        
        # Compute the total offset
        while element.offsetParent
            offsetX += element.offsetLeft
            offsetY += element.offsetTop
            element = element.offsetParent;


        offsetParent = element
        until offsetParent is null or typeof offsetParent is "undefined"
            offsetX += element.offsetLeft
            offsetY += element.offsetTop
            offsetParent = offsetParent.offsetParent
         
        # Add padding and border style widths to offset
        # Also add the <html> offsets in case there's a position:fixed bar
        offsetX += @stylePaddingLeft + @styleBorderLeft + @htmlLeft;
        offsetY += @stylePaddingTop + @styleBorderTop + @htmlTop;
        
        mx = e.pageX - offsetX;
        my = e.pageY - offsetY;
        
        # We return a simple javascript object (a hash) with x and y defined
        {x: mx, y: my}

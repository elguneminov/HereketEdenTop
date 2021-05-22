    let btn = document.getElementById("start");
    
    let canvas = document.querySelector("canvas");
    
    console.log("window innerWidth: " + window.innerWidth);
    console.log("window innerHeight: " + window.innerHeight);

    let w = Math.floor(window.innerWidth /2); //half the window width, viewport width
    let h = Math.floor(window.innerHeight /2); //half the window height, viewport height

    console.log("Rectangle Width: " + w);
    console.log("Rectangle Height: " + h);


    canvas.width = w; //half the window size
    canvas.height = h; //half the window size
    
    let context = canvas.getContext('2d');
 
    // x and y : coordinates of  center of the circle
    let x = Math.floor(Math.random() * w);  //random() returns a number between 0 & 1
    let y = Math.floor(Math.random() * h);
    let radius = 50; //40 , 50

     // sx and sy: speeds in x and y direction (i.e. velocity)
    let sx = Math.floor(Math.random() * 10);
    let sy = Math.floor(Math.random() * 5);
    
    let myreq; //store the request, can be used for stopping 
    //  do the animation, bounce the ball
    function bounceBall() {
       
        
        // clears the specified pixels within the given rectangle
        context.clearRect(0, 0, w, h);
 
        // Create a circle
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2, false);
        //context.fillStyle = 'green';
        context.fill();
        context.lineWidth = 5;
        context.strokeStyle = "black";
        context.stroke();
 
        // ball bounces from the edges (various conditions)
        if (radius + x > w){
            sx = - sx;
        } 
        if (x - radius < 0)
            sx = - sx;
 
        if (y + radius > h)
            sy = - sy;
 
        if (y - radius < 0)
            sy = - sy;
 
        x = x + sx;
        y = y + sy;
        myreq = window.requestAnimationFrame(bounceBall); 
        
    }
 
    btn.onclick = function(e){
        console.log("Start...")
        bounceBall();
    }
   
    let stopbtn = document.getElementById("stop");
    stopbtn.onclick = function(e){
        console.log("Stopp..");
        window.cancelAnimationFrame(myreq) ;
    }
    
    
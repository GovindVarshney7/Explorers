let time=00;
let tl= gsap.timeline();
tl 
    .from("#loader",{
        onStart:
        setInterval (function(){
            if(time<=100){
                document.querySelector('#loader h1').innerHTML= time++ +"%"; 
                document.getElementById("loaderDiv").style.width = time*2.7 +"px";
            } 
        },50)
    })
    .to("#loader",{
        delay:6,
        y:-100+"%",
        duration:1,
    })
    .from("#upLeft h3",{
        opacity :0,
        scale:0,
    })
    .from("#upMiddleA",{
        opacity:0,
        y:-100,
        rotate:-90,
        ease:"Power4.easeOut"
    })
    .from("#upMiddleB",{
        opacity:0,
        y:-100,
        rotate:-90,
        ease:"Power4.easeOut"
    })
    .from("#upMiddleC",{
        opacity:0,
        y:-100,
        rotate:-90,
        ease:"Power4.easeOut"
    })
    .from("#upMiddleD",{
        opacity:0,
        y:-100,
        rotate:-90,
        ease:"Power4.easeOut"
    })
    .from("#upRight",{
        opacity:0,
        y:-100,
        rotate:-90,
        ease:"Power4.easeOut"
    })
    
    .from(["#middleMiddleImg","#middleRight1Img"],{
        scale:0,
        rotate:360,
        duration:1,
    })
    .from("#middleMiddle2 h1",{
        opacity:0,
        onStart:function(){
            $('#middleMiddle2 h1').textillate({ in: { effect: 'fadeInUp' } });
        }
    })
    .from("#middleMiddle1 h4",{
        delay:3,
        opacity:0,
        scale:1.3,
    })
    

    
  
    .from("#middleRight2 h2",{
        opacity:0,
        rotate:180,
        scale:0,
        duration:1,
    })
    
    .from("#A",{
        
        delay:"-1",
        opacity:0,
        x:-100,
        color:"red" 
    })
    .from("#B",{
        
        delay:"-1",
        opacity:0,
        x:100,
        color:"red" 
    })
    .from("#middleLeft h1",{
        opacity:0,
        rotate:180,
        scale:0,
        duration:1,
    })
    .from("#midddleLeftLine",{
        
        delay:"-1",
        x:-200,
        color:"red",
        opacity:0,
    })
    .from("#middleMiddle1 button",{
        opacity:0,
        onStart:function(){
            $('#middleMiddle1 button').textillate({ in: { effect: 'bounceInDown' } });
        }
    })
    .from(".ri-eye-line",{
        opacity:0,
        color:"red",
    })









    $(document).ready(function() {
  
        var counter = 0;
        var c = 0;
        var i = setInterval(function(){
            $(".loading-page .counter h1").html(c + "%");
            $(".loading-page .counter hr").css("width", c + "%");
            //$(".loading-page .counter").css("background", "linear-gradient(to right, #f60d54 "+ c + "%,#0d0d0d "+ c + "%)");
      
          /*
          $(".loading-page .counter h1.color").css("width", c + "%");
          */
          counter++;
          c++;
            
          if(counter == 101) {
              clearInterval(i);
          }
        }, 50);
      });
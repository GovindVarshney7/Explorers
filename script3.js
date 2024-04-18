let tl=gsap.timeline();

tl
    .from("#loader4",{
        opacity:0,
        onStart: function(){
            $('#loader4').textillate({ 
                in: { 
                    effect: 'fadeInUp' ,
                    callback:function(){
                        $('#loader4').textillate('out');
                    }
                },
                out:{ effect: 'fadeOutUp' }
            
            });
        }
    })
    .from("#loader3",{
        opacity:0,
        delay:1,
        onStart: function(){
            $('#loader3').textillate({ 
                in: { 
                    effect: 'fadeInUp' ,
                    callback:function(){
                        $('#loader3').textillate('out');
                    }
                },
                out:{ effect: 'fadeOutUp' }
            
            });
        }
    })
    .from("#loader2",{
        opacity:0,
        delay:0.9,
        onStart: function(){
            $('#loader2').textillate({ 
                in: { 
                    effect: 'fadeInUp' ,
                    callback:function(){
                        $('#loader2').textillate('out');
                    }
                },
                out:{ effect: 'fadeOutUp' }
            
            });
        }
    })
    .from("#loader1",{
        opacity:0,
        delay:0.8,
        onStart: function(){
            $('#loader1').textillate({ 
                in: { 
                    effect: 'fadeInUp' ,
                },
            
            });
        }
    })
    .to("#loader",{
        top:"-300%",
        delay:1.5,
        duration:2,
        ease:"Power4.easeOut",
        
        
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

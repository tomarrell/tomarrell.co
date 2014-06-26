$(document).ready(function() {
    
    (function() {
        var windowHeight = $( window ).height();
        $( window ).resize(function() {
            windowHeight = $( window ).height();
            $(".backing").css({"height": windowHeight + "px"});
            $(".shader").css({"height": windowHeight + "px"});
            $(".section1").css({"height": windowHeight - 10 + "px"});
        });
        $(".backing").css({"height": windowHeight + "px"});
        $(".shader").css({"height": windowHeight + "px"});
        $(".section1").css({"height": windowHeight - 10 + "px"});
    })();
    
    var time = 0;
    
    (function() {
        var a0 = "#75b1de", a1 = "#31d0b1", a2 = "#5bd993", a3 = "#8ce68c", a4 = "#f1c40f", a5 = "#ef6e62";
        var array = [a0, a1, a2, a3, a4, a5];
        var rand = [Math.floor(Math.random() * array.length)];
        
        $(".spanMain").css({"color": array[rand]});
        
    })();
    
    (function() {
        setInterval(function() {
            
            $(".spanChange").removeClass("fadeInUp");
            $(".spanChange").removeClass("fadeOutUp");
            
            if (time === 0) {
                $(".spanChange").text("awesome").addClass("fadeInUp");
            }
            if (time == 3) {
                $(".spanChange").text("straightfoward").addClass("fadeInUp");
            }
            if (time == 6) {
                $(".spanChange").text("interactive").addClass("fadeInUp");
            }
            if (time == 9) {
                $(".spanChange").text("intelligent").addClass("fadeInUp");
            }
            if (time == 12) {
                $(".spanChange").text("server-side").addClass("fadeInUp");
            }
            if (time == 15) {
                $(".spanChange").text("open source").addClass("fadeInUp");
            }
            
            console.log(time);
            time += 1;
            
            if (time == 18) {
                time = 0;
            }
            
        }, 1000);
    })();
    
//    $('a[href*=#]').on('click', function(event){     
//        event.preventDefault();
//        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000, "swing");
//    });
    
    var hashTagActive = "";
    $(".scroll").click(function (event) {
        if (hashTagActive != this.hash) {
            event.preventDefault();
            //calculate destination place
            var dest = 0;
            if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
                dest = $(document).height() - $(window).height();
            } else {
                dest = $(this.hash).offset().top;
            }
            //go to destination
            $('html,body').animate({
                scrollTop: dest
            }, 800, 'swing');
            hashTagActive = this.hash;

            setTimeout(function (){
                hashTagActive = "";
             }, 800);
        }
    });
    
});

























































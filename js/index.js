document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector(".loader").style.display = "none";
    }, 3000);
});



$(document).ready(function () {

    $("header .change ul li:nth-child(1),.sub-snav").hover(function () {
        $(".sub-snav").stop(true).animate({ top: '76px' })
    }, function () {
        $(".sub-snav").stop(true).animate({ top: '-500px' },)
    });
   


    $("header .change ul li:nth-child(2),.sub-onav").hover(function () {
        $(".sub-onav").stop(true).animate({ top: '76px' })
    }, function () {
        $(".sub-onav").stop(true).animate({ top: '-500px' },)
    });
    


    $("header .change ul li:nth-child(3),.sub-nnav").hover(function () {
        $(".sub-nnav").stop(true).animate({ top: '76px' })
    }, function () {
        $(".sub-nnav").stop(true).animate({ top: '-500px' },)
    });
    


    $("header .change ul li:nth-child(4),.sub-cnav").hover(function () {
        $(".sub-cnav").stop(true).animate({ top: '76px' })
    }, function () {
        $(".sub-cnav").stop(true).animate({ top: '-500px' },)
    });
    


    $("header .change ul li:nth-child(5),.sub-gnav").hover(function () {
        $(".sub-gnav").stop(true).animate({ top: '76px' })
    }, function () {
        $(".sub-gnav").stop(true).animate({ top: '-500px' },)
    });
    


    $("header .change ul li:nth-child(6),.sub-dnav").hover(function () {
        $(".sub-dnav").stop(true).animate({ top: '76px' })
    }, function () {
        $(".sub-dnav").stop(true).animate({ top: '-500px' },)
    });
    


    $("header .change ul li:nth-child(7),.sub-bnav").hover(function () {
        $(".sub-bnav").stop(true).animate({ top: '76px' })
    }, function () {
        $(".sub-bnav").stop(true).animate({ top: '-500px' },)
    });
   

    //////////////////////////////////////////////////////////////////////////

    
    let win = $(window);
    let zbg = $("#software .zelda .bg");
    let zcharacter = $("#software .zelda .character");
    
    let cbg = $("#software .kirby .bg")
    let ccharacter = $("#software .kirby .character")
    
    let fbg = $("#software .fire .bg")
    let fcharacter = $("#software .fire .character")
    


    function animateBackground() {
        let topOffset = win.scrollTop();
        let bottomOffset = topOffset + win.height();

        if (bottomOffset > zbg.offset().top) {
            zbg.stop(true).animate({ left: 0 },700);
            zcharacter.stop(true).delay(300).animate({ opacity : '1'},500);
        } else {
            zbg.stop(true).animate({ left: '-2000px' },200);
            zcharacter.stop(true).animate({ opacity : 0},200);
        }

        if (bottomOffset > cbg.offset().top) {
            cbg.stop(true).animate({ right: 0 },700);
            ccharacter.stop(true).delay(300).animate({ opacity : '1'},500);
        } else {
            cbg.stop(true).animate({ right: '-2000px' },200);
            ccharacter.stop(true).animate({ opacity : 0},200);
        }

        if (bottomOffset > fbg.offset().top) {
            fbg.stop(true).animate({ left: 0 },700);
            fcharacter.stop(true).delay(300).animate({ opacity : '1'},500);
        } else {
            fbg.stop(true).animate({ left: '-2000px' },200);
            fcharacter.stop(true).animate({ opacity : 0},200);
        }

    }

    animateBackground();
    

    win.scroll(function() {
        animateBackground();
    });
       




    






    ////////////////////////////////////////////////////////////////////////////
    



    $("header i").click(function () {
        $(".redul").stop(true).slideToggle();
    })
    $("header i").click(function () {
        $(".redsch").stop(true).animate({ top: '-300px' })
    });
    $("header>a img").click(function () {
        $(".redul").css({ display: 'none' })
    });
   

   
    $("header>a img").click(function () {
        $(".redsch").stop(true).animate({ top: '76px' })
    })

    $(".redsch .dot button").click(function () {
        $(".redsch").stop(true).animate({ top: '-300px' })
    });
    $(".redsch .dot p").click(function () {
        $(".redsch").stop(true).animate({ top: '-300px' })
    });





    $(".redul .inner:nth-child(1) button").click(function () {
        $(".redul .inner .blinds").stop(true).slideToggle();
    });
    $(".redul .inner:nth-child(2) button").click(function () {
        $(".redul .inner:nth-child(2) .blindo").stop(true).slideToggle();
    });
    $(".redul .inner:nth-child(3) button").click(function () {
        $(".redul .inner:nth-child(3) .blindn").stop(true).slideToggle();
    });
    $(".redul .inner:nth-child(4) button").click(function () {
        $(".redul .inner:nth-child(4) .blindc").stop(true).slideToggle();
    });
    $(".redul .inner:nth-child(5) button").click(function () {
        $(".redul .inner:nth-child(5) .blindg").stop(true).slideToggle();
    });
    $(".redul .inner:nth-child(6) button").click(function () {
        $(".redul .inner:nth-child(6) .blindd").stop(true).slideToggle();
    });


    $(".redul .dot button,.redul .dot p").click(function () {
        $(".redul").stop(true).slideToggle();
    });

    $(".redul .inner:nth-child(1) button").on('mouseover',function(){
        $(".redul .inner:nth-child(1) .main a,.redul .inner:nth-child(1) .main button").css({color:'#e60012'})
    })
    .on('mouseout',function(){
        $(".redul .inner:nth-child(1) .main a,.redul .inner:nth-child(1) .main button").css({color:'#868686'})
        
    })

    $(".redul .inner:nth-child(2) button").on('mouseover',function(){
        $(".redul .inner:nth-child(2) .main a,.redul .inner:nth-child(2) .main button").css({color:'#e60012'})
    })
    .on('mouseout',function(){
        $(".redul .inner:nth-child(2) .main a,.redul .inner:nth-child(2) .main button").css({color:'#868686'})
        
    })

    $(".redul .inner:nth-child(3) button").on('mouseover',function(){
        $(".redul .inner:nth-child(3) .main a,.redul .inner:nth-child(3) .main button").css({color:'#e60012'})
    })
    .on('mouseout',function(){
        $(".redul .inner:nth-child(3) .main a,.redul .inner:nth-child(3) .main button").css({color:'#868686'})
        
    })

    $(".redul .inner:nth-child(4) button").on('mouseover',function(){
        $(".redul .inner:nth-child(4) .main a,.redul .inner:nth-child(4) .main button").css({color:'#e60012'})
    })
    .on('mouseout',function(){
        $(".redul .inner:nth-child(4) .main a,.redul .inner:nth-child(4) .main button").css({color:'#868686'})
        
    })

    $(".redul .inner:nth-child(5) button").on('mouseover',function(){
        $(".redul .inner:nth-child(5) .main a,.redul .inner:nth-child(5) .main button").css({color:'#e60012'})
    })
    .on('mouseout',function(){
        $(".redul .inner:nth-child(5) .main a,.redul .inner:nth-child(5) .main button").css({color:'#868686'})
        
    })

    $(".redul .inner:nth-child(6) button").on('mouseover',function(){
        $(".redul .inner:nth-child(6) .main a,.redul .inner:nth-child(6) .main button").css({color:'#e60012'})
    })
    .on('mouseout',function(){
        $(".redul .inner:nth-child(6) .main a,.redul .inner:nth-child(6) .main button").css({color:'#868686'})
        
    })


    let view = $(".redul .inner:nth-child(1) .vw");
    let none = $(".inner:nth-child(1) .no");

    $(view).click(function () {
        $(view).css({ display: 'none' })
    });
    $(view).click(function () {
        $(none).css({ display: 'block' })
    });
    $(none).click(function () {
        $(none).css({ display: 'none' })
    });
    $(none).click(function () {
        $(view).css({ display: 'block' })
    });
//////////////////////////////////////////////////////////

    let view_q = $(".redul .inner:nth-child(2) .vw");
    let none_q = $(".inner:nth-child(2) .no");

    $(view_q).click(function () {
        $(view_q).css({ display: 'none' })
    });
    $(view_q).click(function () {
        $(none_q).css({ display: 'block' })
    });
    $(none_q).click(function () {
        $(none_q).css({ display: 'none' })
    });
    $(none_q).click(function () {
        $(view_q).css({ display: 'block' })
    });
/////////////////////////////////////////////////////////////////
    let view_w = $(".redul .inner:nth-child(3) .vw");
    let none_w = $(".inner:nth-child(3) .no");

    $(view_w).click(function () {
        $(view_w).css({ display: 'none' })
    });
    $(view_w).click(function () {
        $(none_w).css({ display: 'block' })
    });
    $(none_w).click(function () {
        $(none_w).css({ display: 'none' })
    });
    $(none_w).click(function () {
        $(view_w).css({ display: 'block' })
    });
/////////////////////////////////////////////////////////////////

    let view_e = $(".redul .inner:nth-child(4) .vw");
    let none_e = $(".inner:nth-child(4) .no");

    $(view_e).click(function () {
        $(view_e).css({ display: 'none' })
    });
    $(view_e).click(function () {
        $(none_e).css({ display: 'block' })
    });
    $(none_e).click(function () {
        $(none_e).css({ display: 'none' })
    });
    $(none_e).click(function () {
        $(view_e).css({ display: 'block' })
    });
/////////////////////////////////////////////////////////////////
    let view_r = $(".redul .inner:nth-child(5) .vw");
    let none_r = $(".inner:nth-child(5) .no");

    $(view_r).click(function () {
        $(view_r).css({ display: 'none' })
    });
    $(view_r).click(function () {
        $(none_r).css({ display: 'block' })
    });
    $(none_r).click(function () {
        $(none_r).css({ display: 'none' })
    });
    $(none_r).click(function () {
        $(view_r).css({ display: 'block' })
    });
/////////////////////////////////////////////////////////////////
    let view_t = $(".redul .inner:nth-child(6) .vw");
    let none_t = $(".inner:nth-child(6) .no");

    $(view_t).click(function () {
        $(view_t).css({ display: 'none' })
    });
    $(view_t).click(function () {
        $(none_t).css({ display: 'block' })
    });
    $(none_t).click(function () {
        $(none_t).css({ display: 'none' })
    });
    $(none_t).click(function () {
        $(view_t).css({ display: 'block' })
    });




    let start = $("html,body");

    $("footer .top .right a>img").click(function () {
        $(start).stop(true).animate({scrollTop : 0},600)
    });



    
    AOS.init();

});





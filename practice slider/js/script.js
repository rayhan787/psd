
$(function(){
    //Script for Preloader
    $(window).on('load', function(){
        $('#preloader').fadeOut(1000);
    })
    
    $(window).on('scroll',function(){
        //Script For sticky menu
        var scrollPosition = $(window).scrollTop()
        if(scrollPosition>0){
            $("#header").addClass('stickyMenu');
        }else{
            $("#header").removeClass('stickyMenu')
        }
        //Back to Top
        if(scrollPosition>600){
            $("#backToTop").fadeIn(700);
        }else{
            $("#backToTop").fadeOut(700)
        }
    })
    //Script for Back to top
    $('#backToTop').on('click',function(){
        $('html,body').animate({
            scrollTop:0,
        },1000)
    })
    
    //Script for Smooth Scroll 

    $('a').on('click',function(e){
        e.preventDefault();
        if(this.hash != ""){
            var hash = $(this.hash);
            $('html,body').animate({
                scrollTop:$(hash).offset().top-60
            },1000)
        }
    })

    //Script for Slide
    $('#bannerSlide').slick({
        autoplay:true,
        autoplaySpeed:2000,
        infinite:true
    })

})







//
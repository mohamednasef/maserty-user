$(document).ready(function () {  
    
    

    $('.owl-slide').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        rtl:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    
    $('.owl-slide2').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        rtl:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    })

    $('.burger').click(function(){
        $(".header-logo").toggleClass("open");
        $("body").toggleClass("i-open");
    })
    $('.item-bank').click(function(){
        $(".item-bank").removeClass("active");
        $(this).addClass("active");
    })
    if($(".layout-login").length ){
        $('body').addClass("hid");
    };

    // $(".layout-login").click(function(e){
     
        
    //     var menu = $(this);
    //     if(e.target == this){
          
   
    //         alert("ddd")
    //     }else{
          
    //     }
        
    //     });

    $('.item-i').on('keyup', function () {
        if (this.value.length >= 1) {
            $(this).next().focus();
            $(this).addClass('back');
        }
    });
    $(".list-template li").click(function () {
        $(".list-template li").removeClass("active");
        $(this).addClass("active");
    });
    $(".pay-ment-l li").click(function () {
        $(".pay-ment-l li").removeClass("active");
        $(this).addClass("active");
    });
    

    var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // عرض القيمة الافتراضية

// تحديث القيمة الحالية كلما تحرك شريط التمرير
slider.oninput = function() {
  output.innerHTML = this.value;
}

});





  $('.toggle-button').click(function(){
   $(this).next('.checklist').toggle()
  })
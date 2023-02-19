$(document).ready(function(){
    $(".hamburger").click(function(){
         $("nav, .shadow").animate({left:'0'});

    })
        
    $(".close, #home").click(function(){
        $("nav, .shadow").animate({left:'-400px'
        });
    })
    
    $(".pen").click(function(){
        
    })
    
    $(".cart-icon, #cart, #category, .account, .orders").click(function(){
        $(".window").show(200);
    })
    
    $(".cart-icon, #cart").click(function(){
        $(".window .header .title").text("Cart");
    });
    
    $(".account").click(function(){
        $(".window .header .title").text("Account");
    })
    $(".orders").click(function(){
        $(".window .header .title").text("Orders");
    })
    $("#category").click(function(){
        $(".window .header .title").text("Categories");
    })
    
    $(".window .close, #home").click(function(){
        $(".window").hide(200);
    })
})

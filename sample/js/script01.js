$(function(){
    
    $("#button01").on("click",function(){
      $(".back-red").toggle(3000);
    })

    $("#button02").on("click",function(){
      $(".back-blue").toggle(450);
    })
    
    $("#button03").on("click",function(){
      $("#box07,#box03").toggle(1000);
    })
    
    $("#button04").on("click",function(){
      $(".boxes div").toggle(2000);
    })
})
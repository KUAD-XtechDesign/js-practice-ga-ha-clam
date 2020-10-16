$(function(){
  
  let txt1= "えーーーーーー！？";
  let txt2= "いいのぉ！？";
  let txt3= "ありがとぉ〜";
  let num1= 4826;
  let num2= 7294;

    $("#button01").on("click",function(){
       $("#content").append("いよぉ〜〜ポン！");
    })

    $("#button02").on("click",function(){
       $("#content").append(txt1 + txt2);
    })
    
    $("#button03").on("click",function(){
       $("#content").append(txt3);
    })
    
    $("#button04").on("click",function(){
       $("#content").append(num1 * num2);
    })

    $("#button05").on("click",function(){
       $("#content").append("num1=" + num1 +"、num2=" + num2 +"、よってnum1÷num2=4826÷7294、したがって"　+ (num1 / num2) +"、おそらく割り切れないと考える。");
    })
})
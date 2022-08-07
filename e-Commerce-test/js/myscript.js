$(function(){
/**************** button to top ***************** */
    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            $(".butonToTop").fadeIn(1000)
        }else{
            $(".butonToTop").fadeOut(1000)
        }
    });

    $(".butonToTop").click(function(){
        $("html, body").animate({
            scrollTop:0
        });
    });



    $(".specialList li").click(function(){
        $("li").removeClass("activ");
        $(this).addClass("activ");
    });
    /******************************** */
    $(".specialList li").click(function(){

    //  console.log($(this).data("img"))
    //  console.log("#"+$(this).data("img"))


    $("#"+$(this).data("img")).fadeIn(1000).siblings().fadeOut(1000)
     
    

    });






});

// $(function(){
//     $(".mainList li").click(function(){
//         $("li").removeClass("activ");
//         $(this).addClass("activ");
//     });
//     /******************************** */
//     $(".mainList li").click(function(){

//     //  console.log($(this).data("img"))
//     //  console.log("#"+$(this).data("img"))


//     $("#"+$(this).data("img")).fadeIn(1500).siblings().fadeOut(1500)
     
    

//     });
// });

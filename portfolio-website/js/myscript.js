$(function(){
    $(".mainList li").click(function(){
        $("li").removeClass("activ");
        $(this).addClass("activ");
    });
    /******************************** */
    $(".mainList li").click(function(){

    //  console.log($(this).data("img"))
    //  console.log("#"+$(this).data("img"))



    $("#"+$(this).data("page")).fadeIn(1500).siblings().fadeOut(1500)
     
    

    });
});
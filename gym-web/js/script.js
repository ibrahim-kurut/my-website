$(function(){
//============ show & hide chevron-top botton ============
  $(window).scroll(function(){
    if($(this).scrollTop() > 300){
      $(".chevron-top").fadeIn();
    }else{
      $(".chevron-top").fadeOut();
    }
  });
  // ============ chevron-top on click ============
  $(".chevron-top").click(function(){
    $("html, body").animate({
      scrollTop : 0
    }, 1000);
  });
  // ============ add class active links ============

 $("nav .links li").click(function(){
   $(this).addClass('active').siblings().removeClass('active');

 });
 // ============ click icon bars  ============
 $("nav .top-nav .bars").click(function(){
  $('nav .links').slideToggle(1000);
 });
  // ============ scroll to element  ============
 $(".links li a").click(function(e){

    e.preventDefault();
    //alert("neden");

    $("html, body").animate({

      scrollTop:$("#"+ $(this).data("scroll")).offset().top

    },1500);

 });
 
























































});
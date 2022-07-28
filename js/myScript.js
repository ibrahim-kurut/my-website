/* ==================================
start our skiils section
================================== */
let ourSkills = document.querySelector(".skills");
window.onscroll = function () {
    let skillOffset = ourSkills.offsetTop;
    let skillOuterHeight = ourSkills.offsetHeight;
    let windowHeight = this.innerHeight;
    let windowScrollTop = this.pageYOffset;

    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

    if (windowScrollTop > (skillOffset + skillOuterHeight - windowHeight)) {
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
            skill.innerHTML = skill.dataset.progress;
            skill.style.paddingLeft = "10px";
        });
    }
    if (windowScrollTop < (skillOffset + skillOuterHeight - windowHeight)) {
        allSkills.forEach(skill => {
            skill.style.width = "0px";
        });
    }
};

/* ==================================
 add active class to link 
================================== */
$(function () {
    $('.nav li a').click(function () {
        $('.nav li a').removeClass('active');
        $(this).addClass('active');

    })
})

/* ==================================
 typing Animation script
================================== */

var typed = new Typed(".typing", {
    strings: ["front-end developer", "Web Designer", "freelancer", "Graphic Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});
var typed = new Typed(".typing-2", {
    strings: ["front-end developer", "Web Designer", "freelancer", "Graphic Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,

});
/* ==================================
start nav-toggler
================================== */

let navToggler = document.querySelector(`.nav-toggler`);
let aside = document.querySelector('.aside');
let links = document.querySelectorAll('.aside .nav li')

console.log(navToggler);
console.log(aside);
console.log(links);


navToggler.addEventListener('click', function () {
    aside.style.left = '0px';
    aside.style.width = '100%';
    this.style.display = 'none';

})
/* ==================================
start close icon
================================== */
let closeIcon = document.querySelector('.close')

closeIcon.addEventListener('click', function () {
    aside.style.left = '-270px';
    aside.style.width = '0px';
    navToggler.style.display = 'block';
})



















/* ========== start change bg-img random ========== */
let changeBgImg = document.querySelector(".home");
// get array of img
let imgArray = ["bg.1.jpeg", "bg.2.jpeg", "bg.3.jpeg"];


setInterval(() => {

    // get random number
    let randomNumber = Math.floor(Math.random() * imgArray.length);


    // change bg img url
    changeBgImg.style.backgroundImage = "url('img/" + imgArray[randomNumber] + "')";

}, 5000);
/* ========== end change bg-img random ========== */






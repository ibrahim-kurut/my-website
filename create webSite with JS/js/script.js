let colorLi = document.querySelectorAll(".colors-list li");
// save color on localStorge 
let mainColor = localStorage.getItem("color-option");

if(mainColor !== null){
    document.documentElement.style.setProperty("--main-color", mainColor);

    // remove class active from all li
    colorLi.forEach(ele => {
        ele.classList.remove("active");

        // add class active on li == localstorge item
        if(ele.dataset.color === mainColor){
            ele.classList.add("active"); 
        }
    });

}

/* ========== START SETTING BOX ========== */
// toggle class spin on icon 
let icon = document.querySelector(".toggle-settings");
let settingsBox = document.querySelector(".settings-box");
icon.onclick = function (){
    this.classList.toggle("fa-spin");
    settingsBox.classList.toggle("open");
}


// change color from settings box


//========================= switch color
// let colorLi = document.querySelectorAll(".colors-list li");
// loop on all list item
colorLi.forEach(li =>{

// click on every list item
    li.onclick = (e) =>{
        // console.log(e.target.dataset.color);
        // set color on root
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);

        // set color on local storge
        localStorage.setItem("color-option", e.target.dataset.color);

        // let target = e.target.parentElement.querySelectorAll(".active");
        // target.forEach(ele => {
        //     ele.classList.remove("active");
        // });
        // e.target.classList.add("active");
        handleActive(e);
    }
});

 // ========================= switch random bg option ==================
 let randomBgSpans = document.querySelectorAll(".randon-background span");
 // loop on all spans
 randomBgSpans.forEach(span =>{

    // click on every span
        span.onclick = (e) =>{
          
            // // remove active class from all childrens
            // let target = e.target.parentElement.querySelectorAll(".active");
            // target.forEach(ele => {
            //     ele.classList.remove("active");
            // });
            // // add active class active on self
            // e.target.classList.add("active");
            handleActive(e);
        }
    });



/* ========== END SETTING BOX ========== */
 
 
 /* ========== START CHANGE BG IMG RANDOM ========== */
let landingPage = document.querySelector(".landing-page");
// get array of img
let imgArray = ["bg.1.jpeg", "bg.2.jpeg", "bg.3.jpeg"];


setInterval( () => {

    // get random number
    let randomNumber = Math.floor(Math.random() * imgArray.length);

    // change bg img url
    landingPage.style.backgroundImage = "url('img/"+ imgArray[randomNumber] +"')";
   
}, 5000);
 /* ========== END CHANGE BG İMG RANDOM ========== */

 /* ========== start our skiils section ========== */
 let ourSkills = document.querySelector(".skills");

 window.onscroll = function(){
    let skillOffset = ourSkills.offsetTop;
    let skillOuterHeight = ourSkills.offsetHeight;
    let windowHeight = this.innerHeight;
    let windowScrollTop = this.pageYOffset;

    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

    if(windowScrollTop > (skillOffset + skillOuterHeight - windowHeight)){
        allSkills.forEach(skill =>{
            skill.style.width = skill.dataset.progress;
            skill.innerHTML = skill.dataset.progress;
            skill.style.paddingLeft = "10px" ;
        });
    }

    if(windowScrollTop < (skillOffset + skillOuterHeight - windowHeight)){
        allSkills.forEach(skill =>{
            skill.style.width = "0px";
            
        });
    }
    
  
};

 /* ========== end our skiils section ========== */

 /* ========== start create popup  ========== */
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {
    img.addEventListener("click", (e) => {
        // create overlay element
        let overlay = document.createElement("div");

        // add class to overlay
        overlay.className = "popup-overlay";

        // append overlay to body

        document.body.appendChild(overlay);

        // create popup box
        let popupBox = document.createElement("div");

        //add class to popup box
        popupBox.className = "popup-box";

        // part 2 

        if(img.alt !== null){
            
            // create heading
            let imgHeading = document.createElement("h3");

            //create text for heading
            let imgText = document.createTextNode(img.alt);

            //append the text to the heading
            imgHeading.appendChild(imgText);

            //append the heading to the popup box

            popupBox.appendChild(imgHeading);
        }

        //create the img
        let popupImg = document.createElement("img");

        // set img src
        popupImg.src = img.src;

        // add img to popup box
        popupBox.appendChild(popupImg);

        //append popup box to body

        document.body.appendChild(popupBox);

        //create close span
        let closeBtn = document.createElement("span");

        //create close btn text 
        let closeBtnText = document.createTextNode("X");

        //append text to close btn
        closeBtn.appendChild(closeBtnText);

        //add class to close btn
        closeBtn.className = "close-btn";

        // add close btn to popup box
        popupBox.appendChild(closeBtn);
    });
});

// close popup
document.addEventListener("click", function(e){

    if(e.target.className === "close-btn"){

        // remove the current popup
        e.target.parentNode.remove();

        //remove ovrelay
        document.querySelector(".popup-overlay").remove();

    }
});

 /* ========== end create popup ========== */
 
 /* ========== start nav bullets popup ========== */
 // select all bullets
 let allBullets = document.querySelectorAll(".nav-bullets .bullet");
 
 // select all all Links
 let allLinks = document.querySelectorAll(".header-area ul li a");

 /* ========== function scroll to the section  ========== */
 function scrollTo(elements){
     elements.forEach(elmnt => {
         elmnt.addEventListener('click', (e) => {
             e.preventDefault();
             document.querySelector(e.target.dataset.section).scrollIntoView({
                 behavior:'smooth'
                });
            })
        })
    }
    
    scrollTo(allBullets);
    // scrollTo(allLinks);
    
    /* ========== end nav bullets popup ========== */
    
    /* ========== start function active class ========== */

    function handleActive(ev){
        // remove active class from all childrens
        let target = ev.target.parentElement.querySelectorAll(".active");
        target.forEach(ele => {
            ele.classList.remove("active");
        });
        // add active class active on self
        ev.target.classList.add("active");
    }
    /* ========== end function active class ========== */
    
    /* ========== start reset option ========== */

    document.querySelector(".reset-option").onclick = function (){

        localStorage.clear();

        window.location.reload();
    }
      
    /* ========== end reset option ========== */

























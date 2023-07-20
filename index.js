// ------------Navigation Bar--------------
let menuIcon=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");

menuIcon.onclick=()=>{
    menuIcon.classList.toggle("bx-x")
    navbar.classList.toggle("active")
}








GitHubCalendar(".calendar", "mrunalibind");

    // or enable responsive functionality:
    GitHubCalendar(".calendar", "mrunalibind", { responsive: true });

    // Use a proxy
    GitHubCalendar(".calendar", "mrunalibind", {
       proxy (mrunalibind) {
         return fetch(`https://your-proxy.com/github?user=${mrunalibind}`)
       }
    })
    // .then(r => r.text())



    const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
// window.addEventListener("scroll", navHighlighter);

// function navHighlighter() {
  
//   // Get current scroll position
//   let scrollY = window.pageYOffset;
  
//   // Now we loop through sections to get height, top and ID values for each
//   sections.forEach(current => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 50;
//     sectionId = current.getAttribute("id");
    
//     /*
//     - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
//     - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
//     */
//     if (
//       scrollY > sectionTop &&
//       scrollY <= sectionTop + sectionHeight
//     ){
//       document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
//     } else {
//       document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
//     }
//   });
// }


// let header=document.querySelector("header");
// header.classList.toggle("sticky",window.scrollY > 100);

// ----------scroll reveal--------------
ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200

});

ScrollReveal().reveal('.home-content, .heading', {origin:'top'})
ScrollReveal().reveal('.home-img, .project-card, .skills-card', {origin:'bottom'})

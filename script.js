//smooth scrolling
// - attch loco css ,attch locomotive scroll min js,some code from loco github for js
//gsap
//- attch gsap cdn,
//scrolltrigger


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function firstPageAnimation(){
    var tl=gsap.timeline();

    tl.from("nav",{
        y:"-10",
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut
    })
     tl.to(".boundingelem",{
        y:0,
        ease:Expo.easeInOut,
        duration:1.5,
        stagger:.2,
         delay:-1
     })
     tl.from("#hero-footer",{
       y:-10,
       opacity:0,
       duration:1.5,
       delay:-1,
       ease:Expo.easeInOut
    })
}
firstPageAnimation()




function circleMouseFollow() {
    window.addEventListener('mousemove', function(dets) {
        document.querySelector('#cursorcircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
        console.log(dets);
    });
}

circleMouseFollow();
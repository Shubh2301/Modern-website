//smooth scrolling
// - attch loco css ,attch locomotive scroll min js,some code from loco github for js

//gsap
//- attch gsap cdn,
//scrolltrigger


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// function circleMouseFollow(){
//     window.addEventListener('mousemove',function(dets){
//         document.querySelector('#cursorcircle').style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`
//         console.log(dets);
          
//     })

// }


function circleMouseFollow() {
    window.addEventListener('mousemove', function(dets) {
        document.querySelector('#cursorcircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
        console.log(dets);
    });
}


circleMouseFollow();
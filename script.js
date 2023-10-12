// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var timeOut;
function circleChapta(){
    
        var xscale=1;
        var yscale=1;

        var xprev=0;
        var yprev=0;

        window.addEventListener("mousemove", function(details){
            this.clearTimeout(timeOut); this.visualViewport
            xscale=gsap.utils.clamp(.8,1.2, details.clientX-xprev);
            yscale=gsap.utils.clamp(.8,1.2,details.clientY-yprev);


            xprev=details.clientX;
            yprev=details.clientY;

            circleMouseFollower(xscale,yscale)
            // console.log(xdiff,ydiff);
           timeOut= this.setTimeout(function(){
              document.querySelector("#minicircle").style.transform=`translate(${details.clientX}px ,${details.clientY}px) scale(${1},${1})`;
                  
            },100)
        });
    
}


function firstpageani(){
    var t1= gsap.timeline();
    t1.from("#nav",{
        y: '-10',
        opacity:0,
        ease: Expo.easeInOut,
        duration:1.5
    })
    .to(".boundingelem",{
        y: 0,
        ease: Expo.easeInOut,
        duration:2,
        delay:-1,
        stagger:.2
    })
    .from("#herofooter",{
        y:-10,
        opacity:0,
        delay:-1,
        ease:Expo.easeInOut,
        duration:1.5
    })
}

function circleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove",function(details){
        document.querySelector("#minicircle").style.transform=`translate(${details.clientX}px ,${details.clientY}px) scale(${xscale},${yscale})`;
     
    })
}


circleMouseFollower();
firstpageani();
circleChapta();


document.querySelectorAll(".elem").forEach(function(elem){
    
    elem.addEventListener("mouseleave", function(details){
        // console.log(details.clientX,details.clientY)
        gsap.to(elem.querySelector("img"),{
            ease: Power3,
            opacity: 0,
            duration:.5

        });

    });
});

document.querySelectorAll(".elem").forEach(function(elem){
    var rotate=0;
    var diffrot=0;
    elem.addEventListener("mousemove", function(details){
        // console.log(details.clientX,details.clientY);
         var diff = details.clientY - elem.getBoundingClientRect().top;
         diffrot= details.clientX- rotate ;
         rotate=details.clientX;
         
        gsap.to(elem.querySelector("img"),{
            ease: Power3,
            opacity: 1,
            top: diff,
            left:details.clientX,
            rotate:gsap.utils.clamp(-20,20,diffrot)

        });

    });
});
const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0,
    yValue = 0,
    btncount = 0;

gsap.registerPlugin(ScrollTrigger);
// REVEAL //
gsap.utils.toArray(".revealUp").forEach(function (elem) {
    ScrollTrigger.create({
        trigger: elem,
        start: "top 85%",
        end: "bottom 15%",
        markers: false,
        onEnter: function () {
            gsap.fromTo(
                elem,
                { y: 100, autoAlpha: 0 },
                {
                    duration: 1.25,
                    y: 0,
                    autoAlpha: 1,
                    ease: "back",
                    overwrite: "auto"
                }
            );
        },
        onLeave: function () {
            gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
        },
        onEnterBack: function () {
            gsap.fromTo(
                elem,
                { y: -100, autoAlpha: 0 },
                {
                    duration: 1.25,
                    y: 0,
                    autoAlpha: 1,
                    ease: "back",
                    overwrite: "auto"
                }
            );
        },
        onLeaveBack: function () {
            gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
        }
    });
});

function update(cursorPointer) {
    parallax_el.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let isInLeft =
            parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue =
            (cursorPointer - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;
        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) perspective(7000px) translateZ(${zValue}px)`;
    });

}

update(0)

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;


    update(e.clientX);
});



document.getElementById('btn1').addEventListener("click", function () {
    document.getElementById('m1').style.animation = "ApDp 5s linear";
    btncount += 1;
});

document.getElementById('heart').addEventListener("click", function () {
    document.getElementById('m2').style.animation = "ApDp 5s linear";
    btncount += 1;
    checkbtn();
});

document.getElementById('btn3').addEventListener("click", function () {
    document.getElementById('m3').style.animation = "ApDp 5s linear";
    btncount += 1;
    checkbtn();
});


function checkbtn() {
    if (btncount === 3) {
        console.log("true");
        window.location.href = "https://open.spotify.com/playlist/1mFKrRnsXtCtttD8sDG5xT";
        return true;
    }
    else {
        return false;
    }

}



function detecDevice() {
    let device = false;

    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)) {
        window.location.replace("err.html");
        device = true;
    } else {
        device = false;
    }
}

detecDevice();

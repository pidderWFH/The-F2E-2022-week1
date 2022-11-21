
gsap.registerPlugin(ScrollTrigger, TextPlugin);

/* section-questions */
gsap.to(".twinkle", {opacity:0.3, duration:1, repeat: -1});

gsap.to(".typingTitle", {
    text: "你是否也有以下困擾...?",
    duration: 2,
    scrollTrigger:{
        trigger: ".typingTitle",
        toggleActions: "play pause resume reset",
    },
});

const typingAnimation = "羨慕別人的酷酷網頁動畫？";
const typingWisthes = "滿足不了同事的許願?";
const typingSkillTrees = "動畫技能樹太雜無從下手？";
gsap.to(".typingAnimation", {
    text: typingAnimation,
    duration: 2.5,
    scrollTrigger:{
        trigger: ".typingAnimation",
        toggleActions: "play pause resume reset",
    },
});
gsap.to(".typingWisthes", {
    text: typingWisthes,
    duration: 2.5,
    scrollTrigger:{
        trigger: ".typingWisthes",
        toggleActions: "play pause resume reset",
    },
});
gsap.to(".typingSkillTrees", {
    text: typingSkillTrees,
    duration: 2.5,
    scrollTrigger:{
        trigger: ".typingSkillTrees",
        toggleActions: "play pause resume reset",
    },
});
gsap.fromTo(
        ".typingTwinkle", 
            0,
        {
            visibility: "hidden",
        },
        {
            visibility: "visible",
            repeat: -1,
            yoyo: true,
            repeatDelay: .5,
        },
    );

function animated(element){
    let x = 0;
    if (element.classList.contains("row")){
        x = -300;
    }else if(element.classList.contains("reverse")){
        x = 300;
    }

    element.style.transform = `translate(${x}px, 0px)`;
    gsap.fromTo(
        element,
        {x: x, y: 0, opacity: 0, visibility: "hidden"},
        {
            duration: .8,
            delay: .2,
            x:0,
            y:0,
            visibility: "visible",
            opacity: "1",
            ease: "none",
            overwrite: "auto",
        },
    );
};
function hide(element){
    gsap.set(element, {opacity: 0, visibility: "hidden"});
};


gsap.utils.toArray(".animation-wrapper").forEach((element) => {
    if(element.classList.contains("row") || element.classList.contains("reverse")){
        hide(element);
        ScrollTrigger.create({
            trigger: element,
            // markers: true,
            onEnter: function(){
                animated(element);
            },
            onEnterBack: function(){
                animated(element);
            },
            onLeave: function(){
                hide(element);
            },
        });
    };
});

// section-solution

let sections = gsap.utils.toArray(".solution-item")
let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger:{
        trigger: ".section-solution",
        // markers: true,
        start: "+=30%",
        pin: true,
        scrub: .1,
        end: "+=1000",
    },
});
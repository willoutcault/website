const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const content = document.querySelector(".content");
const headline = document.querySelector(".headline");
const cols = document.querySelector(".cols");
const headlineinfo = document.querySelector(".headlineinfo");
const nav = document.querySelector("nav")
const header = document.querySelector("header")
const about_me = document.querySelector(".about_me")


const tl = new TimelineMax();

tl.fromTo(hero,1,{height: "10%"}, {height: "80%", ease: Power2.easeInOut})
.fromTo(hero, 1.2, {width: '100%'}, {width: '80%', ease: Power2.easeInOut})
.fromTo(slider, 1.2, {x: "-100%"}, {x: '0%', ease: Power2.easeInOut}, "-=1.2")
.fromTo(content, 1.2, {x: "-100%"}, {x: '0%', ease: Power2.easeInOut}, "-=1.2")
.fromTo(nav, 1.2, {y: "-100%"}, {y: '0%', ease: Power2.easeInOut}, "-=1.2")
.fromTo(headline, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=.2")
.fromTo(headlineinfo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=.5")
.fromTo(cols, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
.fromTo(about_me, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")

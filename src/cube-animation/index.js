// import Component from 'play-web-core/es6/component'

// 
// IMPORT SVG ASSETS
// 
import mountainSvg from './svgAssets/mountainSvg';



// dom elements
var environment = document.getElementById('environment');
var camera = document.getElementById('camera');
var character = document.querySelector('.character');
var mountainContainer = document.querySelector('.mountainContainer');

// populate the scene
mountainContainer.innerHTML = mountainSvg;

var mountain = document.querySelector('.mountain');



// 
// TWEEN LIBRARY
// 
// run off screen
// tween1.to(character, 1, { transform:"translateX(calc(100vw))" });


// init ScrollMagic controller
var controller = new ScrollMagic.Controller();


// 
// SCENE 1
// 

// build tween1
var tween1 = new TimelineMax();
tween1.to(character, 1, { transform:"translateX(calc(10vw))" })
tween1.to(mountain, 1, { transform:"translateX(-40vw)" }, "-=1");


var scene1 = new ScrollMagic.Scene({ triggerElement: "#trigger1", duration: 2000 })
  .setTween(tween1) // trigger a TweenMax.to tween
  .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
  .addTo(controller);



// 
// SCENE 2
// 

// build tween2
// var tween2 = new TimelineMax();
// tween2.to(cube, 0.5, { transform:"rotateX(180deg) rotateY(100deg)" })
// tween2.to(camera, 0.5, { transform:"scale(1) rotateY(0deg) translate(calc(50% - 200px), 20%)" }, "-=0.5")
// tween2.to(cube, 0.5, { transform:"rotateX(180deg) rotateY(90deg)" }, "-=0.3")
// tween2.to(topFace, 0.5, { transform:"rotateX(120deg) translateZ(490px) translateY(-415px) translateX(-100px)" }, "-=0.5")
// tween2.to(rightFace, 0.5, { transform:"rotateY(90deg) rotateX(-40deg) translateZ(-340px) translateY(-220px)" }, "-=0.5")
// tween2.to(bottomFace, 0.5, { transform:"rotateX(-150deg) rotateY(77deg) translateZ(680px) translateY(100px)" }, "-=0.5")
// tween2.to(leftFace, 0.5, { transform:"rotateY(-20deg) rotateX(30deg) translateZ(530px)" }, "-=0.5")
// tween2.to(frontFace, 0.5, { transform:"rotateY(50deg) translateZ(550px) translateY(-40px)" }, "-=0.5") 
// tween2.to(backFace, 0.5, { transform:"rotateY(170deg) rotateX(-20deg) translateZ(480px) translateY(-221px)" }, "-=0.5");

// tween2.to(topFace, 1, { transform:"rotateX(120deg) translateZ(100px) translateY(-175px)" }, "-=1")
// tween2.to(environment, 1, { backgroundColor: 'white' }, "-=1");


// var scene2 = new ScrollMagic.Scene({ triggerElement: "#trigger2" })
//   .setTween(tween2) // trigger a TweenMax.to tween
//   .addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
//   .addTo(controller);
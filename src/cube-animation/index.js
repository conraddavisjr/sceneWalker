// import Component from 'play-web-core/es6/component'

// 
// IMPORT SVG ASSETS
// 
import svgCollection from './svgAssets/svgCollection';



// dom elements
var environment = document.getElementById('environment');
var camera = document.getElementById('camera');
var characterBuilder = document.querySelector('.characterBuilder');
var character = document.querySelector('.character');
var characterHat = document.querySelector('.characterHat');
var copyContainer = document.querySelector('.copy-container');
var characterColorOption = document.querySelector('.characterBuilder .optionsContainer');
var characterSelect = document.querySelector('.character-select');
var mountainContainer = document.querySelector('.mountainContainer');
var comet = document.querySelector('.comet');
var alertIcon = document.querySelector('.alertIcon');
var groundImpact = document.querySelector('.groundImpact');
var sceneCopyContainer = document.querySelector('.copy-container');
var sceneCopy = document.querySelector('.copy-container .content');

// populate the scene
mountainContainer.innerHTML = svgCollection.mountainSvg;
characterHat.innerHTML = svgCollection.wizardHat;

var mountain = document.querySelector('.mountain');



// 
// TWEEN LIBRARY
// 
// run off screen
// tween1.to(character, 1, { transform:"translateX(calc(100vw))" });


// init ScrollMagic controller
var controller = new ScrollMagic.Controller();

// 
// PROLOGUE
// 

// character builder
characterColorOption.addEventListener('click', (e) => {
	character.style.backgroundColor = e.target.style.backgroundColor
});

characterSelect.addEventListener('click', (e) => {
	characterBuilder.style.display = 'none';
	environment.classList.remove('hide-environment')
});
// var tween1 = new TimelineMax();
// tween1.to(character, 1, { transform:"translateX(calc(50vw))" })
// tween1.to(mountain, 1, { x:'-100vw' }, "-=1");


// var scene1 = new ScrollMagic.Scene({ triggerElement: "#trigger1", duration: 1000 })
//   .setTween(tween1) // trigger a TweenMax.to tween
//   .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
  // .addTo(controller);

// 
// SCENE 1
// 

// build tween1
var tween1 = new TimelineMax();
tween1.to(copyContainer, 0.2, { opacity: 0 })
tween1.to(character, 1, { transform:"translateX(calc(50vw))" }, "-=0.2")
tween1.to(mountain, 1, { x:'-100vw' }, "-=1");


var scene1 = new ScrollMagic.Scene({ triggerElement: "#trigger1", duration: 1000 })
  .setTween(tween1) // trigger a TweenMax.to tween
  .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
  .addTo(controller);



// 
// SCENE 2
// 

// build tween2
var tween2 = new TimelineMax();
tween2.to(alertIcon, 0.1, {opacity: 1} )
tween2.to(comet, 1, { transform:"translateX(60vw) translateY(400px)" }, "+=0.3")
tween2.to(groundImpact, 0, { opacity: 1}, "-=0.5")
tween2.to(alertIcon, 0.1, {opacity: 0}, "-=0.2" );
tween2.to(character, 1, { transform:"translateX(72vw) scale(0.8) translateY(500px) rotate(-190deg)", opacity: 0 }, "-=0.5")
tween2.to(environment, 1, { transform:"translateY(-80vh)" }, "-=1")
tween2.set(character, { opacity: 0, transform:"translateX(60vw) scale(1) translateY(0vh) rotate(-130deg)"});

var scene2 = new ScrollMagic.Scene({ triggerElement: "#trigger2", duration: 500 })
  .setTween(tween2) // trigger a TweenMax.to tween
  .addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
  .addTo(controller);


// 
// SCENE 3
// 

// build tween3
var tween3 = new TimelineMax();
tween3.to(sceneCopy, 0.5, {text:"It doesn't look like you're going to make it... oh btw, 63% of women game on mobile."})
tween3.to(copyContainer, 0.5, { opacity: 1 }, "-=0.3")
tween3.to(character, 1, { opacity: 1, transform:"translateX(32vw) scale(1) translateY(80vh) rotate(-200deg)" }, "-=0.5");

var scene3 = new ScrollMagic.Scene({ triggerElement: "#trigger3", duration: 800 })
  .setTween(tween3) // trigger a TweenMax.to tween
  .addIndicators({name: "3 (duration: 0)"}) // add indicators (requires plugin)
  .addTo(controller);



var flashlight = document.getElementById("flashlight");
document.addEventListener("click", checkCorrectness);
console.log("Hi");
var lightA = document.getElementById("lightA");
var lightB = document.getElementById("lightB");
var lightC = document.getElementById("lightC");
var lightD = document.getElementById("lightD");

lightA.style.opacity = 0;
lightB.style.opacity = 0;
lightC.style.opacity = 0;
lightD.style.opacity = 0;
var challengescompleted = 0;
function oneClicked() {
  console.log("CLICKE");
  oneC = true;
}
function twoClicked() {
   console.log("CLICKEE");
  twoC = true;
}
function threeClicked() {
  console.log("CLICKEEE");
  threeC = true;
}
function fourClicked() {
  console.log("CLICKEEEE");
  fourC = true;
}

var yyyy = 0;
var xxxx = 0;
function checkScroll() {
  yyyy = (window.pageYOffset);
  xxxx = (window.pageXOffset);
  console.log("HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
}
var attempts = 0;
window.onscroll = checkScroll;
function checkCorrectness() {
  attempts ++;

  console.log("rainbows and unicorns");
    if(a===true && b===true && c===true && d===true) {
        correct=true;
    } else checkIfRight();
   function checkIfRight() {
       if(oneC){
          if(a===false){
          a = true;
            console.log("HIIIIII");
            lightA.style.opacity = .9;
         }
        else if(a===true){
          a= false;
          console.log("BYEEEEEEEEEEEEE");
          lightA.style.opacity = 0;
        }
        if(d===false){
           d = true;
          lightD.style.opacity = .9;
          }
         else if(d===true){
            d=false;
           lightD.style.opacity = 0;
          }
         oneC =false;
      }
      if(twoC){
        if(a===false){
          a=true;
          lightA.style.opacity = .9;
        }
        else if(a===true){
          a=false;
          lightA.style.opacity = 0;
        }
        if(c===false){
          c=true;
          lightC.style.opacity = .9;
        }
        else if(c===true){
          c=false;
          lightC.style.opacity = 0;
        }
        twoC = false;
      }
      if(threeC){
        if(b===false){
          b=true;
          lightB.style.opacity = .9;
        }
        else if(b===true){
          b=false;
          lightB.style.opacity = 0;
        }
      }
        threeC = false;
      if(fourC){
        if(d===false){
          d=true;
          lightD.style.opacity =.9;
        }
        else if(d===true){
          d=false;
          lightD.style.opacity = 0;
      }
        if(b===false){
            b=true;
          lightB.style.opacity= 9.0;
          }
          else if(b===true){
            b=false;
            lightB.style.opacity = 0;
          }
           fourC = false;
      }
     if ((attempts) > 5) {
       lafayetteJuSc()
     }
  }
   
  }
var map = document.getElementById("maze");
var lose = false;
var lafayettescary = document.getElementById("lafayettescary");
lafayettescary.style.setProperty("--opacity", 0);
function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function lafayetteJuSc() {
  console.log("Hi");
  for (var adbnfiadb = 0; adbnfiadb <= 20; adbnfiadb++) {
   // lafayettescary.style.transform(rotate(Math.random(360)));
    lafayettescary.style.setProperty("--opacity", 1);
     await delay(Math.random(15));
    lafayettescary.style.setProperty("--opacity", 0);
     await delay(Math.random(15));
    
  }
}
var cursorzone = document.getElementById("cursorzone");
function touchThingyWhatever() {
  lose = true;
  lafayetteJuSc();
  console.log("IM GOING TO BACK TO SLEEP")
  lose=false;
  
}

function mazeStart() {
  map.addEventListener("mouseover", touchThingyWhatever())
};


var a = false;
var b = false;
var c = false;
var d = false;
var correct = false;
var lightA = document.getElementById("lightA");
var lightB = document.getElementById("lightB");
var lightC = document.getElementById("lightC");
var lightD = document.getElementById("lightD");
var oneC = false;
var twoC = false;
var threeC = false;
var fourC = false;


document 
  .documentElement
  .addEventListener("mousemove", function handleMouseMove(event) {
  flashlight.style.setProperty("--position-x", (event.clientX+xxxx-100) +"px");
  flashlight.style.setProperty("--position-y", (event.clientY+yyyy-100) +"px");
    
  lafayettescary.style.setProperty("--position-x", (event.clientX-Math.random()*4-2) + "px");
  lafayettescary.style.setProperty("--position-y", (event.clientY-Math.random()*4-2) + "px");
console.log("HI");
  })
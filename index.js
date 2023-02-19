// Button press
var size = document.querySelectorAll(".drum").length;
for(var i=0; i<size; i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
  var buttonInnerHTML = this.innerHTML;
      makesound(buttonInnerHTML);
      ButtonAnimation(buttonInnerHTML);

});
 //key press
}
document.addEventListener("keypress", function (event) {
  makesound(event.key);
  ButtonAnimation(event.key);

})

function makesound(key){
      switch (key) {
        case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
         tom1.play();
          break;
        case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
         tom2.play();
          break;
        case "s":
        var tom3= new Audio("sounds/tom-3.mp3");
         tom3.play();
          break;
        case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
         tom4.play();
          break;
        case "j":
        var rash = new Audio("sounds/crash.mp3");
         rash.play();
          break;
        case "k":
        var kck = new Audio("sounds/kick-bass.mp3");
         kck.play();
          break;
        case "l":
        var snre = new Audio("sounds/snare.mp3");
         snre.play();
          break;
        default:

      }
    }


    // Animation
 function ButtonAnimation(keypress){

var activebutton = document.querySelector("."+keypress);
     activebutton.classList.add("pressed");
     setTimeout(function(){
       activebutton.classList.remove("pressed");
     }, 100);
 }






//
// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();

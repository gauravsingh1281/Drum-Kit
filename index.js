let drumButtons = document.querySelectorAll(".drum");

//For button clicked
drumButtons.forEach((element) => {
  element.addEventListener("click", function () {
    let btnClicked = this.textContent;
    makeSound(btnClicked);
    buttonAnimation(btnClicked);
  });
});

//For key press on keyboard
document.addEventListener("keydown", (e) => {
  makeSound(e.key);
  buttonAnimation(e.key);
});

const makeSound = (key) => {
  switch (key) {
    case "w":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();

      break;
    case "a":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();

      break;
    case "s":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();
      break;
    default:
      console.log(btnClicked);
  }
};

//For button animation on mouse clicked and keyboard press

const buttonAnimation = (currentKeyValue) => {
  let activeBtn = document.querySelector(`.${currentKeyValue}`);
  activeBtn.classList.add("pressed");
  setTimeout(() => {
    activeBtn.classList.remove("pressed");
  }, 100);
};

// document
//   .querySelectorAll(".drum")
//   .forEach((element) =>
//     element.addEventListener("click", () => console.log(this))
//   );

const numberOfButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", (e) => {
    console.log(e.target.innerText);
    makeSound(e.target.innerText);
    buttonAnimation(e.target.innerText);
  });

  document.addEventListener("keydown", (e) => {
    makeSound(e.key);
    buttonAnimation(e.key);
  });
}

const makeSound = (key) => {
  switch (key) {
    case "w":
      const audioW = new Audio("sounds/tom-1.mp3");
      audioW.play();
      break;

    case "a":
      const audioA = new Audio("sounds/tom-2.mp3");
      audioA.play();
      break;

    case "s":
      const audioS = new Audio("sounds/tom-3.mp3");
      audioS.play();
      break;

    case "d":
      const audioD = new Audio("sounds/tom-4.mp3");
      audioD.play();
      break;

    case "j":
      const audioJ = new Audio("sounds/snare.mp3");
      audioJ.play();
      break;

    case "k":
      const audioK = new Audio("sounds/crash.mp3");
      audioK.play();
      break;

    case "l":
      const audioL = new Audio("sounds/kick-bass.mp3");
      audioL.play();
      break;

    default:
      console.log(e.target.innerText);
  }
};

function buttonAnimation(currentKey) {
  const activeButton = document.querySelector(`.${currentKey}`);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 200);
}

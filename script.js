/*
const grayTop = document.querySelector("#gray-top");
const blueSquare = document.querySelector("#blue-square");
const blueBackground = document.querySelectorAll(".gray-blue-background");
const RedDot = document.querySelectorAll(".red-dot");
const mark = document.querySelector(".mark");

grayTop.addEventListener("click", () => {
  blueSquare.innerHTML = "0";
  blueBackground.forEach((blbg) => {
    blbg.style.backgroundColor = "white";
  });
  RedDot.forEach((rd) => {
    rd.style.display = "none";
  });
});

blueBackground.addEventListener("click", () => {
    
});
*/

const grayTop = document.querySelector("#gray-top");
const blueSquare = document.querySelector("#blue-square");
const blueBackground = document.querySelectorAll(".gray-blue-background");
const redDot = document.querySelectorAll(".red-dot");
const markElements = document.querySelectorAll(".mark");

grayTop.addEventListener("click", () => {
  blueSquare.innerHTML = "0";
  blueBackground.forEach((blbg) => {
    blbg.style.backgroundColor = "white";
  });
  redDot.forEach((rd) => {
    rd.style.display = "none";
  });
});

// for each mark element, add a click event listener
markElements.forEach((mark) => {
  mark.addEventListener("click", (event) => {
    // event.currentTarget is the element that the event listener is attached to
    const clickedMark = event.currentTarget;
    // closest() method returns the closest ancestor of the current element
    // (or the current element itself) which matches the selectors
    // given in parameter
    const parentBackground = clickedMark.closest(".gray-blue-background");

    // if the parent background exists, change its background color to white
    if (parentBackground) {
      parentBackground.style.backgroundColor = "white";

      const rDot = parentBackground.querySelector(".red-dot");
      if (rDot) {
        rDot.style.display = "none";
      }

      // Update the counter by reducing
      const currentCounter = parseInt(blueSquare.innerHTML);

      if (currentCounter && currentCounter > 0) {
        blueSquare.innerHTML = (currentCounter - 1).toString();
      }
    }
  });
});

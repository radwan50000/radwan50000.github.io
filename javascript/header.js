let header = document.getElementById("header"),
  skyBG = document.getElementById("header-sky-bg"),
  elements = document.querySelectorAll(".parralax");

function moveObjects(num1, num2) {
  for (let i = 0; i < elements.length; i++) {
    let moveSpeed = elements[i].getAttribute("moveSpeed"),
      pageX = num1 - (window.innerWidth / 2) * moveSpeed,
      pageY = num2 - (window.innerHeight / 2) * moveSpeed;
    if (elements[i] != undefined) {
      elements[
        i
      ].style.cssText = `transform: perspective(1000px) translate(calc(-50% - ${
        pageX * moveSpeed
      }px),calc(-50% - ${pageY * moveSpeed}px))`;
    }
  }
}

moveObjects(0, 0);

header.addEventListener("mousemove", function (e) {
  moveObjects(e.pageX, e.pageY);
});

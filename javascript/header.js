let header = document.getElementById("header"),
  skyBG = document.getElementById("header-sky-bg"),
  gyroscope = new Gyroscope({ frequency: 20 }),
  elements = document.querySelectorAll(".parralax");

console.log(gyroscope);

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

window.addEventListener("deviceorientation", function (event) {
  const alpha = event.alpha;
  const beta = event.beta;
  const gamma = event.gamma;
  for (let i = 0; i < elements.length; i++) {
    let moveSpeed = i == 0 ? 1 : 0.5;
    if (elements[i] != undefined) {
      elements[
        i
      ].style.cssText = `transform: perspective(1000px) translate(calc(-50% - ${
        beta * moveSpeed
      }px),calc(-50% - ${gamma * moveSpeed}px))`;
    }
  }
});

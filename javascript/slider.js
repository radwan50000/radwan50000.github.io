let right_slider_button = document.getElementById("right-slider-button"),
  left_slider_button = document.getElementById("left-slider-button"),
  image_slider = document.getElementById("active-image-slider"),
  first = false,
  projectSrc = [
    "./images/pray-project.png",
    "./images/xo-project.png",
    "./images/music-project.png",
    "./images/pingpong-project.png",
  ],
  direction = ["TR", "TL", "BR", "BL"],
  first_project_images = [
    document.getElementById("project-1-UR"),
    document.getElementById("project-1-UL"),
    document.getElementById("project-1-BR"),
    document.getElementById("project-1-BL"),
  ],
  second_project_images = [
    document.getElementById("project-2-UR"),
    document.getElementById("project-2-UL"),
    document.getElementById("project-2-BR"),
    document.getElementById("project-2-BL"),
  ],
  third_project_images = [
    document.getElementById("project-3-UR"),
    document.getElementById("project-3-UL"),
    document.getElementById("project-3-BR"),
    document.getElementById("project-3-BL"),
  ],
  counter = 0;


for(let i = 0 ;i < projectSrc.length ; i++){
  let parent = document.getElementById("project-number");
  let span = document.createElement("span");
  parent.appendChild(span);
}

function changeIcons() {
  if (counter == 0) {
    for (let i = 0; i < first_project_images.length; i++) {
      first_project_images[i].classList.add(`active-icon-${direction[i]}`);
    }
    for (let i = 0; i < second_project_images.length; i++) {
      second_project_images[i].classList.remove(`active-icon-${direction[i]}`);
    }
    for (let i = 0; i < third_project_images.length; i++) {
      third_project_images[i].classList.remove(`active-icon-${direction[i]}`);
    }
  } else if (counter == 1 || counter == 3) {
    for (let i = 0; i < first_project_images.length; i++) {
      first_project_images[i].classList.remove(`active-icon-${direction[i]}`);
    }
    for (let i = 0; i < first_project_images.length; i++) {
      second_project_images[i].classList.add(`active-icon-${direction[i]}`);
    }
    for (let i = 0; i < third_project_images.length; i++) {
      third_project_images[i].classList.remove(`active-icon-${direction[i]}`);
    }
  }else{
    for (let i = 0; i < first_project_images.length; i++) {
      first_project_images[i].classList.remove(`active-icon-${direction[i]}`);
    }
    for (let i = 0; i < first_project_images.length; i++) {
      second_project_images[i].classList.remove(`active-icon-${direction[i]}`);
    }
    for (let i = 0; i < third_project_images.length; i++) {
      third_project_images[i].classList.add(`active-icon-${direction[i]}`);
    }
  }
}

function change_project_number(){
  let spans = document.querySelectorAll("#project-number span");
  for(let i = 0 ; i < spans.length ; i++){
    console.log(spans[i].classList)
    i == counter ? spans[i].classList.add('active-dot'):spans[i].classList.remove('active-dot');
  }
}


change_project_number()
changeIcons();

right_slider_button.addEventListener("click", function () {
  if (counter < projectSrc.length - 1) {
    image_slider.src = projectSrc[++counter];
  } else {
    counter = 0;
    image_slider.src = projectSrc[counter];
  }
  change_project_number()
  changeIcons();
  //animation: name duration timing-function delay iteration-count direction fill-mode;
  if (first) {
    image_slider.style.cssText =
      "animation: image-fade-1 0.5s ease 0s alternate forwards;";
    first = !first;
  } else {
    image_slider.style.cssText =
      "animation: image-fade-2 0.5s ease 0s alternate forwards;";
    first = !first;
  }
});

left_slider_button.addEventListener("click", function () {
  if (counter > 0) {
    image_slider.src = projectSrc[--counter];
  } else {
    counter = projectSrc.length - 1;
    image_slider.src = projectSrc[counter];
  }
  changeIcons();
  change_project_number()
  if (first) {
    image_slider.style.cssText =
      "animation: image-fade-1 0.5s ease 0s alternate forwards;";
    first = !first;
  } else {
    image_slider.style.cssText =
      "animation: image-fade-2 0.5s ease 0s alternate forwards;";
    first = !first;
  }

});

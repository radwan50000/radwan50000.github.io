let upButton = document.getElementById("upButton");

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 500) {
    upButton.classList.add("active");
  } else {
    upButton.classList.remove("active");
  }
});

let sections = [
  "skills-section",
  "projects-section",
  "about-section",
  "contactUs-section",
];

let headerButtons = document.querySelectorAll("#headerLists li");

for (let i = 0; i < headerButtons.length; i++) {
  headerButtons[i].addEventListener("click", function () {
    document.getElementById(sections[i]).scrollIntoView({ behavior: "smooth" });
  });
}

window.addEventListener("scroll", function () {
  let project_container = document.getElementById("projects-section"),
    projectScrollPosition =
      project_container.getBoundingClientRect().top + window.pageYOffset / 2;
  (tree1 = document.getElementById("tree-1")),
    (tree2 = document.getElementById("tree-1-rev")),
    (moon = this.document.getElementById("moon-img")),
    (treePos = 0),
    (moonPos = 0);
  if (window.scrollY >= projectScrollPosition) {
    treePos = window.scrollY / 97;
    moonPos = window.scrollY / 65;

    tree1.style.cssText = `top: ${-40 + treePos}rem;right: ${
      -40 + treePos
    }rem;`;
    tree2.style.cssText = `top: ${-40 + treePos}rem;left: ${-40 + treePos}rem;`;
    moon.style.cssText = `top: ${-30 + moonPos}rem;`;
  }
});

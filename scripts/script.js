const expandButton = document.querySelector("header button");
expandButton.addEventListener("click", expand);

function expand() {
  document.body.classList.toggle("expand");

  var profileContent = document.getElementById("profile-content");
  profileContent.classList.toggle("show");
}


/*Profile buttons*/

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const infoSection = document.getElementById("profile-info-section");
const skillsSection = document.getElementById("profile-skills-section");
const animationSection = document.getElementById("profile-animation-section");

button1.addEventListener("mouseenter", () => {
  infoSection.style.display = "block";
  skillsSection.style.display = "none";
  animationSection.style.display = "none";
});

button2.addEventListener("mouseenter", () => {
  infoSection.style.display = "none";
  skillsSection.style.display = "block";
  animationSection.style.display = "none";
});

button3.addEventListener("mouseenter", () => {
  infoSection.style.display = "none";
  skillsSection.style.display = "none";
  animationSection.style.display = "block";
});


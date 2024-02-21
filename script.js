const settingsMenu = document.querySelector(".settings-menu");
const darkBtn = document.getElementById("dark-btn");

function settingsToggle() {
  settingsMenu.classList.toggle("settings-menu-height");
}
document.addEventListener("keydown", function (e) {
  if (
    e.key === "Escape" &&
    settingsMenu.classList.contains("settings-menu-height")
  ) {
    settingsMenu.classList.remove("settings-menu-height");
  }
});
function darkMode() {
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");

  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

if (localStorage.getItem("theme") == null) {
  localStorage.setItem("theme", "light");
}

if (localStorage.getItem("theme") == "light") {
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
} else {
  localStorage.setItem("theme", "light");
}

// localStorage.setItem("theme", "light");
// localStorage.getItem("theme");
//test

function toggleNewTheme() {
  const doc = document.documentElement;
  const currentTheme = doc.getAttribute("data-theme");
  const newTheme = currentTheme === "Dark" ? "light" : "Dark";
  doc.setAttribute("data-theme", newTheme);

  if (newTheme === "Dark") {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "grey";
  }
}
const toggle = document.getElementById("toggle");
toggle.addEventListener("change", toggleNewTheme);

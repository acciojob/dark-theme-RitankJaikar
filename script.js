function swapTheme() {
  const appMain = document.getElementById("app");
  const swapButton = document.getElementById("swap");

  // Check the current theme and toggle classes
  if (appMain.classList.contains("day")) {
    appMain.classList.remove("day");
    appMain.classList.add("night");
    swapButton.classList.remove("button_day");
    swapButton.classList.add("button_night");
  } else {
    appMain.classList.remove("night");
    appMain.classList.add("day");
    swapButton.classList.remove("button_night");
    swapButton.classList.add("button_day");
  }
}

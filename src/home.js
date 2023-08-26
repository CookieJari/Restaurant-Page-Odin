function loadHome() {
  const main = document.querySelector("main");
  main.innerHTML = "";

  const mainWindow = document.createElement("div");
  mainWindow.classList.add("main-window");

  const logo = document.createElement("div");
  logo.classList.add("logo");

  mainWindow.append(logo);

  main.append(mainWindow);

  return main;
}

export default loadHome;

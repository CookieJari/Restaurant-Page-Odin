function createContact() {
  const mainWindow = document.createElement("div");
  mainWindow.classList.add("main-window");

  const number = document.createElement("h1");
  number.textContent = "☎️ 0955 456 7123";
  mainWindow.append(number);

  const email = document.createElement("h1");
  email.textContent = "📧 cookies@jari.com";
  mainWindow.append(email);

  return mainWindow;
}

function loadContact() {
  const main = document.querySelector("main");
  main.innerHTML = "";

  const menuHead = document.createElement("h1");
  menuHead.textContent = "Contact";

  main.append(menuHead);
  main.append(createContact());
  //main.append(createMenuItems());

  return main;
}

export default loadContact;

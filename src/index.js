import "./style.css";
import logo from "./logo-cookiejari.jpg";

// Add the image to our existing div.
// const myLogo = new Image();
// myLogo.src = logo;

// element.appendChild(myLogo);

// console.log("WOW");

function createHeader() {
  const header = document.createElement("header");

  const headerName = document.createElement("div");
  headerName.classList.add("resto-name");
  const restoName = document.createElement("h1");
  restoName.textContent = "CookieJari";
  headerName.appendChild(restoName);

  header.appendChild(headerName);

  header.appendChild(createNav());
  return header;
}

function createNav() {
  const nav = document.createElement("nav");

  //home
  const homeLi = document.createElement("li");
  nav.appendChild(homeLi);
  const homeDiv = document.createElement("div");
  homeLi.appendChild(homeDiv);
  homeDiv.classList.add("home");
  homeLi.appendChild(homeDiv);
  const home = document.createElement("a");
  home.textContent = "Home";
  home.addEventListener("click", (e) => {
    console.log("home");
  });
  homeDiv.appendChild(home);

  //menu
  const menuLi = document.createElement("li");
  nav.appendChild(menuLi);
  const menuDiv = document.createElement("div");
  menuLi.appendChild(menuDiv);
  menuDiv.classList.add("menu");
  menuLi.appendChild(menuDiv);
  const menu = document.createElement("a");
  menu.textContent = "Menu";
  menu.addEventListener("click", (e) => {
    console.log("Menu");
  });
  menuDiv.appendChild(menu);

  //contact
  const contactLi = document.createElement("li");
  nav.appendChild(contactLi);
  const contactDiv = document.createElement("div");
  contactLi.appendChild(contactDiv);
  contactDiv.classList.add("contact");
  contactLi.appendChild(contactDiv);
  const contact = document.createElement("a");
  contact.textContent = "Contact";
  contact.addEventListener("click", (e) => {
    console.log("contact");
  });
  contactDiv.appendChild(contact);

  return nav;
}

function component() {
  const content = document.getElementById("content");

  content.append(createHeader());

  return content;
}

document.body.appendChild(component());

import CookieJPG from "./choco-chip-cookie.jpg";
import CrinkleJPG from "./crinkles.jpg";
import BananaCakeJPG from "./banana-cake.jpg";

function createDish(title, photo, description) {
  //sorry I used cookies for the parent item because I got lazy retyping this
  const cookies = document.createElement("div");
  cookies.classList.add("menu-item");

  const cookieTitle = document.createElement("h2");
  cookieTitle.textContent = title;
  cookies.append(cookieTitle);

  const imageHolder = document.createElement("div");
  imageHolder.classList.add("image-holder");
  cookies.append(imageHolder);

  const image = new Image();
  image.src = photo;
  imageHolder.append(image);

  const desc = document.createElement("p");
  desc.textContent = description;

  cookies.append(desc);

  return cookies;
}
function createMenuItems() {
  const mainWindow = document.createElement("div");
  mainWindow.classList.add("menu-window");

  //cookie

  mainWindow.append(
    createDish(
      "Choco-Chip Cookies",
      CookieJPG,
      "Eat our Oatmeal Chocolate Chip Cookies now 😡"
    )
  );

  mainWindow.append(
    createDish(
      "Crinkles",
      CrinkleJPG,
      "Our cookies are better than ADB 🏦. You should eat it now 👍"
    )
  );

  mainWindow.append(
    createDish(
      "Banana-Cake",
      BananaCakeJPG,
      "Banana Cake is like a bread but its banana cake. It has wallnuts 🧱🥜"
    )
  );

  return mainWindow;
}

function loadMenu() {
  const main = document.querySelector("main");
  main.innerHTML = "";

  const menuHead = document.createElement("h1");
  menuHead.textContent = "Menu";

  main.append(menuHead);

  main.append(createMenuItems());

  return main;
}

export default loadMenu;

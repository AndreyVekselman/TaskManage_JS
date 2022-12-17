// import classes and functions
import { freshMainScreen } from "./module/freshMainScreen.mjs";

//add or remove tasks on screen when it was added
window.addEventListener("storage", function (e) {
  freshMainScreen();
});

freshMainScreen();

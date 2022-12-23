// function route(path, template) {
//   return (routes[path] = template);
// }

// route("/", "home");
// console.log(routes);

import { freshMainScreen } from "./module/freshMainScreen.mjs";
import { header } from "./module/header.mjs";
import { main } from "./module/main.mjs";
import { footer } from "./module/footer.mjs";

let templates = {
  home: function () {
    header();
    main();
    footer();
    freshMainScreen();
  },
  solutionPage: function () {
    header();
    main();
    footer();
  },
  checkDeletePage: function () {
    header();
    main();
    footer();
  },
  about: function () {
    console.log("bye");
  },
};
let routes = {
  "/": "home",
  "/about": "about",
  "/taskSolutionPage": "solutionPage",
  "/taskCheckDelete": "checkDeletePage",
};
function resolveRoute(routeURL) {
  try {
    return routes[routeURL]; //routes['/about'] == 'about'
  } catch (e) {
    return false;
  }
}
function router() {
  let url = window.location.hash.slice(1) || "/";
  let route = resolveRoute(url);
  if (route) {
    templates[route]();
    console.log(route);
  } else {
    console.log("Route " + url + " not found");
  }
}
window.addEventListener("load", router);
window.addEventListener("hashchange", router);
// window.addEventListener("storage", function (e) {
//   freshMainScreen();
// });

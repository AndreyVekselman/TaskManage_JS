// function route(path, template) {
//   return (routes[path] = template);
// }

// route("/", "home");
// console.log(routes);

import { freshMainScreen } from "./module/freshMainScreen.mjs";

let templates = {
  home: freshMainScreen(),
  about: function () {
    console.log("bye");
  },
};
let routes = {
  "/": "home",
  "/about": "about",
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
window.addEventListener("storage", function (e) {
  freshMainScreen();
});

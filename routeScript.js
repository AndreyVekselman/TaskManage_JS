// function route(path, template) {
//   return (routes[path] = template);
// }

// route("/", "home");
// console.log(routes);

let templates = {
  home: function () {
    console.log("hi");
  },
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
} //What the function gets, what it puts to the url variable.//sessionStorage.com#/about/ == '/about'//sessionStorage.com#/ == '/'
function router() {
  let url = window.location.hash.slice(1) || "/"; // '#/about'.slice(1) == '/about'
  let route = resolveRoute(url); //if route exists in routes object
  if (route) {
    templates[route](); //templates['about']();
    console.log(route);
  } else {
    console.log("Route " + url + " not found");
  }
}
window.addEventListener("load", router);
window.addEventListener("hashchange", router);

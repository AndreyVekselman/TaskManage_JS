export function loadFromLocalStorage() {
  const LS = localStorage;
  const object = JSON.parse(LS.getItem("student"));
  return object;
}

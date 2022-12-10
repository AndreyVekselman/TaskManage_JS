export function saveToLocalStorage(object) {
  const LS = localStorage;
  LS.setItem("student", JSON.stringify(object));
}

export function removeItems() {
  let items = document.getElementsByClassName("mainDiv");
  for (let i = 0; i < items.length; i++) {
    items[i].remove();
    i--;
  }
}

export const placeholder = () => {
  const formBlock = document.querySelector('.form');

  for (const item of formBlock) {
    const placeInput = item.placeholder;
    item.addEventListener("focus", () => {
      item.placeholder = "";
    });
    item.addEventListener("blur", () => {
      item.placeholder = placeInput;
    });
  }
}
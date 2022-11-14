function showNewText(selectorElement, viewport, text, newText) {
  const textElement = document.querySelector(selectorElement);
  const screen = window.matchMedia(viewport);

  function changeScreen(e) {
    if (e.matches) {
      textElement.textContent = newText;
    } else {
      textElement.textContent = text;
    }
  }
  screen.addListener(changeScreen);
  changeScreen(screen);

}

export default showNewText;

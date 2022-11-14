function showNewText(selectorElement, viewport) {
  const textElement = document.querySelector(selectorElement);
  const screen = window.matchMedia(viewport);

  function changeScreen(e) {
    if (e.matches) {
      textElement.textContent = textElement.dataset.toggleMobile;
    } else {
      textElement.textContent = textElement.dataset.toggleDesktop;
    }
  }
  screen.addListener(changeScreen);
  changeScreen(screen);

}

export default showNewText;

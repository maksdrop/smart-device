function showTabindex(selectorElement, viewport) {
  const textElement = document.querySelector(selectorElement);
  const screen = window.matchMedia(viewport);

  function changeScreen(e) {
    if (e.matches) {
      textElement.tabIndex = 0;
    } else {
      textElement.removeAttribute('tabIndex');
    }
  }
  screen.addListener(changeScreen);
  changeScreen(screen);
}

export default showTabindex;

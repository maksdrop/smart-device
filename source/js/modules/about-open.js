function openBlock() {
  const button = document.querySelector('[data-button]');
  const descriptions = document.querySelectorAll('[data-indent]');

  button.addEventListener('click', () => {
    button.textContent = 'свернуть';

    descriptions.forEach((item) => {
      item.classList.toggle('about__company-hide');

      if (item.classList.contains('about__company-hide')) {
        button.textContent = 'подробнее';
      }
    });
  });
}

export default openBlock;

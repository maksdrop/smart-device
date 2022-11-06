function openBlock() {
  const button = document.querySelector('.about__button');
  const descriptions = document.querySelectorAll('.about__description--indent');

  button.addEventListener('click', () => {
    button.textContent = 'свернуть';

    descriptions.forEach((item) => {
      item.classList.toggle('about__description--hide');

      if (item.classList.contains('about__description--hide')) {
        button.textContent = 'подробнее';
      }
    });
  });
}

export default openBlock;

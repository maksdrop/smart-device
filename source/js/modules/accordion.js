function showAccordion() {
  const accordion = document.querySelectorAll('.footer__accordion');
  const listAccordion = document.querySelectorAll('.footer__accordion-container');

  const hideContent = () => {
    accordion.forEach((item) => {
      item.classList.add('footer__accorion--close');
    });

    listAccordion.forEach((item) => {
      item.classList.add('footer__accordion--hide');
    });
  };

  const showContent = (i = 0) => {
    accordion[i].classList.remove('footer__accorion--close');
    listAccordion[i].classList.remove('footer__accordion--hide');
  };

  showContent();
  hideContent();

  accordion.forEach((item, i) => {
    item.addEventListener('click', () => {
      if (item.classList.contains('footer__accorion--close')) {
        hideContent();
        showContent(i);
      } else {
        hideContent();
      }
    });
  });
}

export default showAccordion;

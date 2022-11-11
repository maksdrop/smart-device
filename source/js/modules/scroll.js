function scrollElement() {
  const link = document.querySelector('.intro__button');
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const header = document.querySelector('.header').scrollHeight;
    const topOffset = document.querySelector('.questions').getBoundingClientRect().top;
    const offsetPosition = topOffset - header;
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  });
}

export default scrollElement;

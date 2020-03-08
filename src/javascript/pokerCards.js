function pokerCard(value) {
  const element = document.createElement('div');
  element.classList.add('c-card', 'js-card');
  element.textContent = value;

  return element;
}

function attachEvents(element) {
  element.addEventListener('click', function handleClick(event) {
    if (!event.target || !event.target.className.includes('js-card')) {
      return;
    }

    if (event.target.className.includes('c-card--full')) {
      event.target.setAttribute(
        'style',
        `
        left: ${event.target.dataset.left}px;
        top: ${event.target.dataset.top}px;
        position: fixed;
      `,
      );
      event.target.classList.remove('c-card--full');

      window.setTimeout(function resetStyle() {
        event.target.setAttribute('style', '');
      }, 500);
    } else {
      event.target.setAttribute('data-top', event.target.offsetTop);
      event.target.setAttribute('data-left', event.target.offsetLeft);

      event.target.setAttribute(
        'style',
        `
        left: ${event.target.dataset.left}px;
        top: ${event.target.dataset.top}px;
        position: fixed;
      `,
      );

      window.setTimeout(function waitX() {
        event.target.classList.add('c-card--full');
        event.target.setAttribute(
          'style',
          `
          left: 0px;
          top: 0px;
          position: absolute
        `,
        );
      }, 200);
    }
  });
}

function pokerCards() {
  const element = document.createElement('div');
  element.classList.add('c-cards');
  attachEvents(element);

  const options = [1, 2, 3, 4, 5, 6, 7, 8];
  options.forEach(function appendCard(option) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('c-cards__item');
    cardElement.appendChild(pokerCard(option));
    element.appendChild(cardElement);
  });

  return element;
}

export default pokerCards;

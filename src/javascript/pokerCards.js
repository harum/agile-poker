function pokerCard(value) {
  const element = document.createElement('div');
  element.classList.add('c-card');

  const base = document.createElement('div');
  base.classList.add('c-card__base', 'js-card');
  base.textContent = value;

  element.appendChild(base);

  return element;
}

function attachEvents(element) {
  element.addEventListener('click', function handleClick(event) {
    if (!event.target || !event.target.className.includes('js-card')) {
      return;
    }

    if (event.target.className.includes('c-card--active')) {
      event.target.setAttribute(
        'style',
        `
        left: ${event.target.dataset.left}px;
        top: ${event.target.dataset.top}px;
        position: absolute
      `,
      );
      event.target.classList.remove('c-card--active-start');
      event.target.classList.remove('c-card--active');

      window.setTimeout(function resetStyle() {
        event.target.setAttribute('style', '');
      }, 500);
    } else {
      event.target.setAttribute('data-top', event.target.offsetTop);
      event.target.setAttribute('data-left', event.target.offsetLeft);

      event.target.classList.add('c-card--active-start');
      event.target.setAttribute(
        'style',
        `
        left: ${event.target.dataset.left}px;
        top: ${event.target.dataset.top}px;
        position: absolute
      `,
      );

      window.setTimeout(function waitX() {
        event.target.classList.add('c-card--active');
        event.target.setAttribute(
          'style',
          `
          left: 0px;
          top: 0px;
          position: absolute
        `,
        );
      }, 0);
    }
  });
}

function pokerCards() {
  const element = document.createElement('div');
  element.classList.add('c-cards');
  attachEvents(element);

  const options = [1, 2, 3, 4, 5, 6, 7, 8];
  options.forEach(function appendCard(option) {
    element.appendChild(pokerCard(option));
  });

  return element;
}

export default pokerCards;

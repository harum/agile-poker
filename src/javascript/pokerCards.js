import InfinityIcon from '../images/infinity.png';
import QuestionIcon from '../images/question.png';
import BreakIcon from '../images/break.png';

const icons = {
  infinity: InfinityIcon,
  question: QuestionIcon,
  break: BreakIcon,
};

function pokerCard(value) {
  const element = document.createElement('div');
  element.classList.add('c-card', 'js-card');

  const content = document.createElement('div');
  content.classList.add('c-card__content');

  if (['question', 'infinity', 'break'].includes(value)) {
    const cardIcon = new Image();
    cardIcon.src = icons[value];
    cardIcon.classList.add('c-card__icon');
    content.appendChild(cardIcon);
  } else {
    const text = document.createElement('div');
    text.classList.add('c-card__text');
    text.textContent = value;
    content.appendChild(text);
  }

  element.appendChild(content);
  return element;
}

function attachEvents(element) {
  element.addEventListener('click', function handleClick(event) {
    event.stopPropagation();
    const cardElement = event.target.closest('.js-card');

    if (!cardElement) return;

    if (cardElement.className.includes('c-card--full')) {
      cardElement.setAttribute(
        'style',
        `
        left: ${cardElement.dataset.left}px;
        top: ${cardElement.dataset.top}px;
        position: fixed;
      `,
      );
      cardElement.classList.remove('c-card--full');

      window.setTimeout(function resetStyle() {
        cardElement.setAttribute('style', '');
      }, 500);
    } else {
      cardElement.setAttribute('data-top', cardElement.offsetTop);
      cardElement.setAttribute('data-left', cardElement.offsetLeft);

      cardElement.setAttribute(
        'style',
        `
        left: ${cardElement.dataset.left}px;
        top: ${cardElement.dataset.top}px;
        position: fixed;
      `,
      );

      window.setTimeout(function waitX() {
        cardElement.classList.add('c-card--full');
        cardElement.setAttribute(
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

function pokerCards(options = []) {
  const element = document.createElement('div');
  element.classList.add('c-cards');
  attachEvents(element);

  options.forEach(function appendCard(option) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('c-cards__item');
    cardElement.appendChild(pokerCard(option));
    element.appendChild(cardElement);
  });

  return element;
}

export default pokerCards;

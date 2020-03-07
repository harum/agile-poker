function pokerCard(value) {
  const element = document.createElement('div');
  element.classList.add('c-card');

  const base = document.createElement('div');
  base.classList.add('c-card__base');
  base.textContent = value;

  element.appendChild(base);

  return element;
}

function pokerCards() {
  const element = document.createElement('div');
  element.classList.add('c-cards');

  const options = [1, 2, 3, 4, 5, 6, 7, 8];
  options.forEach(option => {
    element.appendChild(pokerCard(option));
  });

  return element;
}

export default pokerCards;

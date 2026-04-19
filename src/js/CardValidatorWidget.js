import detectPaymentSystem, { getPaymentSystemTitle } from './detectPaymentSystem';
import validateCardNumber from './validateCardNumber';
import paymentSystems from './paymentSystems';

export default class CardValidatorWidget {
  constructor(container) {
    this.container = container;
    this.onSubmit = this.onSubmit.bind(this);
    this.onInput = this.onInput.bind(this);
  }

  init() {
    this.render();
    this.bindToDOM();
  }

  render() {
    this.container.innerHTML = `
      <h1 class="widget__title">Credit Card Validator</h1>
      <ul class="cards"></ul>
      <form class="validator-form" novalidate>
        <input class="validator-form__input" type="text" placeholder="Введите номер карты" autocomplete="off">
        <button class="validator-form__button" type="submit">Click to Validate</button>
      </form>
      <p class="validator-form__result"></p>
    `;

    const cards = this.container.querySelector('.cards');

    paymentSystems.forEach((system) => {
      const item = document.createElement('li');
      item.className = 'cards__item';
      item.dataset.system = system.id;

      const image = document.createElement('img');
      image.className = 'cards__icon';
      image.src = system.icon;
      image.alt = system.title;

      item.append(image);
      cards.append(item);
    });
  }

  bindToDOM() {
    this.form = this.container.querySelector('.validator-form');
    this.input = this.container.querySelector('.validator-form__input');
    this.result = this.container.querySelector('.validator-form__result');
    this.cards = Array.from(this.container.querySelectorAll('.cards__item'));

    this.form.addEventListener('submit', this.onSubmit);
    this.input.addEventListener('input', this.onInput);
  }

  onInput() {
    const system = detectPaymentSystem(this.input.value);

    this.highlightSystem(system);
    this.clearResult();
  }

  onSubmit(event) {
    event.preventDefault();

    const system = detectPaymentSystem(this.input.value);
    const isValid = validateCardNumber(this.input.value);

    this.highlightSystem(system);

    if (system && isValid) {
      this.showResult(`Номер карты корректный (${getPaymentSystemTitle(system)})`, 'valid');
      return;
    }

    this.showResult('Номер карты некорректный', 'invalid');
  }

  highlightSystem(activeSystem) {
    this.cards.forEach((card) => {
      card.classList.toggle('cards__item_active', card.dataset.system === activeSystem);
      card.classList.toggle('cards__item_muted', Boolean(activeSystem) && card.dataset.system !== activeSystem);
    });
  }

  clearResult() {
    this.result.textContent = '';
    this.result.className = 'validator-form__result';
  }

  showResult(text, type) {
    this.result.textContent = text;
    this.result.className = `validator-form__result validator-form__result_${type}`;
  }
}

import './css/style.css';
import CardValidatorWidget from './js/CardValidatorWidget';

const container = document.querySelector('.card-validator');
const widget = new CardValidatorWidget(container);

widget.init();

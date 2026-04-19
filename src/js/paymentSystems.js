import visaIcon from '../img/visa.svg';
import mastercardIcon from '../img/mastercard.svg';
import amexIcon from '../img/amex.svg';
import discoverIcon from '../img/discover.svg';
import jcbIcon from '../img/jcb.svg';
import dinersIcon from '../img/diners.svg';
import mirIcon from '../img/mir.svg';

const paymentSystems = [
  {
    id: 'visa',
    title: 'Visa',
    icon: visaIcon,
  },
  {
    id: 'mastercard',
    title: 'MasterCard',
    icon: mastercardIcon,
  },
  {
    id: 'amex',
    title: 'American Express',
    icon: amexIcon,
  },
  {
    id: 'discover',
    title: 'Discover',
    icon: discoverIcon,
  },
  {
    id: 'jcb',
    title: 'JCB',
    icon: jcbIcon,
  },
  {
    id: 'diners',
    title: 'Diners Club',
    icon: dinersIcon,
  },
  {
    id: 'mir',
    title: 'Мир',
    icon: mirIcon,
  },
];

export default paymentSystems;

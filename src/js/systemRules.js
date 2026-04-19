function inRange(value, from, to, size) {
  if (value.length < size) {
    return false;
  }

  const prefix = Number(value.slice(0, size));

  return prefix >= from && prefix <= to;
}

function startsWithOneOf(value, prefixes) {
  return prefixes.some((prefix) => value.startsWith(prefix));
}

const systemRules = [
  {
    id: 'mir',
    title: 'Мир',
    match: (value) => inRange(value, 2200, 2204, 4) && value.length <= 19,
  },
  {
    id: 'amex',
    title: 'American Express',
    match: (value) => startsWithOneOf(value, ['34', '37']) && value.length <= 15,
  },
  {
    id: 'discover',
    title: 'Discover',
    match: (value) => (
      value.startsWith('6011')
      || startsWithOneOf(value, ['65'])
      || inRange(value, 644, 649, 3)
      || inRange(value, 622126, 622925, 6)
    ) && value.length <= 19,
  },
  {
    id: 'jcb',
    title: 'JCB',
    match: (value) => inRange(value, 3528, 3589, 4) && value.length <= 19,
  },
  {
    id: 'diners',
    title: 'Diners Club',
    match: (value) => (
      inRange(value, 300, 305, 3)
      || startsWithOneOf(value, ['36', '38', '39'])
    ) && value.length <= 19,
  },
  {
    id: 'mastercard',
    title: 'MasterCard',
    match: (value) => (
      inRange(value, 2221, 2720, 4)
      || inRange(value, 51, 55, 2)
    ) && value.length <= 16,
  },
  {
    id: 'visa',
    title: 'Visa',
    match: (value) => value.startsWith('4') && value.length <= 19,
  },
];

export default systemRules;

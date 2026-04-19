import systemRules from './systemRules';

function normalize(value) {
  return String(value).replace(/\D/g, '');
}

export function getPaymentSystemTitle(id) {
  const system = systemRules.find((item) => item.id === id);

  return system ? system.title : '';
}

export default function detectPaymentSystem(value) {
  const digits = normalize(value);

  if (!digits) {
    return null;
  }

  const system = systemRules.find((item) => item.match(digits));

  return system ? system.id : null;
}

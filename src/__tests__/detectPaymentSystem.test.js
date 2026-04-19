import detectPaymentSystem, { getPaymentSystemTitle } from '../js/detectPaymentSystem';

describe('detectPaymentSystem', () => {
  test.each([
    ['4111 1111 1111 1111', 'visa'],
    ['5555 5555 5555 4444', 'mastercard'],
    ['378282246310005', 'amex'],
    ['6011111111111117', 'discover'],
    ['3530111333300000', 'jcb'],
    ['30569309025904', 'diners'],
    ['2200000000000004', 'mir'],
    ['2204000000000000', 'mir'],
  ])('returns %s for %s', (cardNumber, expectedSystem) => {
    expect(detectPaymentSystem(cardNumber)).toBe(expectedSystem);
  });

  test('returns null for unknown payment system', () => {
    expect(detectPaymentSystem('8600123412341234')).toBeNull();
  });

  test('returns correct title by system id', () => {
    expect(getPaymentSystemTitle('visa')).toBe('Visa');
    expect(getPaymentSystemTitle('mir')).toBe('Мир');
    expect(getPaymentSystemTitle('unknown')).toBe('');
  });
});

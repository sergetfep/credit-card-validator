import validateCardNumber from '../js/validateCardNumber';

describe('validateCardNumber', () => {
  test.each([
    ['4111 1111 1111 1111'],
    ['5555 5555 5555 4444'],
    ['378282246310005'],
    ['6011111111111117'],
    ['3530111333300000'],
    ['30569309025904'],
    ['2200000000000004'],
  ])('returns true for %s', (cardNumber) => {
    expect(validateCardNumber(cardNumber)).toBe(true);
  });

  test.each([
    ['4111 1111 1111 1112'],
    ['5555 5555 5555 4445'],
    ['378282246310006'],
    ['6011111111111118'],
    ['3530111333300001'],
    ['30569309025905'],
    ['2200000000000005'],
    ['1234567890'],
    [''],
  ])('returns false for %s', (cardNumber) => {
    expect(validateCardNumber(cardNumber)).toBe(false);
  });
});

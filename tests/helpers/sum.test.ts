import { describe, expect, test } from 'vitest';
import { addArray, sum } from '../../src/helpers/sum';

describe('Add function', () => {
  test('adds 1 + 2 to equal 3', () => {
    const a = 1;
    const b = 2;
    const resultado = sum(a, b);

    expect(resultado).toBe(3);
  });
});

describe('addArray function', () => {
  test('Shold return the proper value of the add arrArray function', () => {
    const arregloNum = [5, 5, 5, 5];
    const resultado = addArray(arregloNum);

    expect(resultado).toBe(20);
  });

  test('shoyld return 0 if the arrays is empty', () => {
    const numberArray = [];
    const resultado = addArray(numberArray);

    expect(resultado).toBe(0);
  });
});

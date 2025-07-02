const { ajustarUrlsImagens } = require('../js/utils');

describe('ajustarUrlsImagens', () => {
  test('retorna placeholder quando imagem esta vazia', () => {
    const pratos = [{ nome: 'Bacalhau', imagem: '' }];

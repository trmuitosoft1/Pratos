const { ajustarUrlsImagens } = require('../js/utils');

describe('ajustarUrlsImagens', () => {
  test('retorna placeholder quando imagem esta vazia', () => {
    const pratos = [{ nome: 'Bacalhau', imagem: '' }];

       const baseUrl = 'https://raw.githubusercontent.com/trmuitosoft1/Pratos/main/Imagens/';

  test('uses placeholder when image is empty and no match exists', () => {
    const pratos = [{ nome: 'Desconhecido', imagem: '' }];
    const result = ajustarUrlsImagens(pratos);
    expect(result[0].imagem).toBe('https://via.placeholder.com/100');
  });

  test('resolves empty image using name match', () => {
    const pratos = [{ nome: 'Cozido especial', imagem: '' }];
    const result = ajustarUrlsImagens(pratos);
    expect(result[0].imagem).toBe(baseUrl + 'cozido.png');
  });

  test('prefixes relative image paths', () => {
    const pratos = [{ nome: 'Frango', imagem: 'frango.png' }];
    const result = ajustarUrlsImagens(pratos);
    expect(result[0].imagem).toBe(baseUrl + 'frango.png');
  });

  test('keeps absolute image paths intact', () => {
    const pratos = [{ nome: 'Bacalhau', imagem: 'http://example.com/baca.png' }];
    const result = ajustarUrlsImagens(pratos);
    expect(result[0].imagem).toBe('http://example.com/baca.png');
  });
});

const { ajustarUrlsImagens } = require('../js/utils');

describe('ajustarUrlsImagens', () => {
  test('retorna placeholder quando imagem esta vazia', () => {
    const pratos = [{ nome: 'Bacalhau', imagem: '' }];
    const resultado = ajustarUrlsImagens(pratos);
    expect(resultado[0].imagem).toBe('https://via.placeholder.com/100');
  });

  test('concatena base do GitHub quando recebe nome relativo', () => {
    const pratos = [{ nome: 'Bacalhau', imagem: 'bacalhau.png' }];
    const resultado = ajustarUrlsImagens(pratos);
    expect(resultado[0].imagem).toBe(
      'https://raw.githubusercontent.com/trmuitosoft1/Pratos/main/Imagens/bacalhau.png'
    );
  });
});

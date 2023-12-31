const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toEqual('function');
    // Teste se o retorno da função é um array.
    expect(productDetails().length).toBe(2);
    // Teste se o array retornado pela função contém dois itens dentro.
    for (const product of productDetails()){
      expect(product).not.toBe(null);
      expect(Array.isArray(product)).toBeFalsy();
      expect(typeof product).toEqual('object');

      // Teste se os dois productIds terminam com 123.
      expect(product.details.productId).toContain('123');
    }
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(productDetails().length).toBe(2);
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('leite', 'café')[0]).not.toEqual(productDetails('leite', 'café')[1])
  });
});

'use strict'

const ptBr = (() => {

  return {
    TITLES: {
      greetings: 'Olá, %s seja bem-vindo',
      buy: 'Comprar',
      cancel: 'Cancelar',
      add: 'Adicionar',
      finish: 'Finalizar',
    },
    WARNINGS: {
      'empty-cart': 'Seu carrinho está vazio!',
      'empty-stock': 'Esse produto não encontra-se em estoque!',
    },
    ERRORS: {
      purchase: 'Houve um erro ao finalizar sua compra!',
    },
    SUCCESS: {
      purchase: 'Compra efetuada com sucesso!',
      'product-add': 'Produto adicionado com sucesso!'.
    },
  };

})();

export default ptBr;

'use strict'

const ptBr = (() => {

  return {
    TITLES: {
      wellcome: 'Bem-vindo',
      account: 'Minha Conta',
      buy: 'Comprar',
      cancel: 'Cancelar',
      add: 'Adicionar',
      finish: 'Finalizar',
      search: 'Buscar',
      'load-more': 'Carregar mais',
      'user-greetings': 'Olá, %s seja bem-vindo',
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
      'product-add-purchase': 'Produto adicionado ao cesto com sucesso!',
    },
  };

})();

export default ptBr;

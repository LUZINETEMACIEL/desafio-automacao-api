describe('Fluxo Completo de Pedidos - Desafio API', () => {
  const baseUrl = 'https://api.restful-api.dev/objects';
  let orderId;

  // Etapa 1: Criar um pedido
  it('Deve criar um novo pedido com sucesso', () => {
    cy.request('POST', baseUrl, {
      name: "Smartphone XPTO",
      data: {
        cliente: "Lucas Kim",
        vendedor: "Loja Tech",
        valor: 1500.0
      }
    }).then((response) => {
      expect(response.status).to.eq(200); // Valida status
      expect(response.body).to.have.property('id'); // Valida se campo ID existe
      orderId = response.body.id; // Salva o ID para as próximas etapas
      cy.log('ID Criado: ' + orderId);
    });
  });

  // Etapa 2: Consultar o pedido pelo ID
  it('Deve consultar o pedido criado anteriormente', () => {
    cy.request('GET', `${baseUrl}/${orderId}`).then((response) => {
      expect(response.status).to.eq(200); // Valida status
      expect(response.body.id).to.eq(orderId); // Valida se o ID é o mesmo
      expect(response.body.name).to.eq("Smartphone XPTO"); // Valida campo name
    });
  });

  // Etapa 3: Atualizar o pedido
  it('Deve atualizar os dados do pedido', () => {
    cy.request('PUT', `${baseUrl}/${orderId}`, {
      name: "Smartphone XPTO - Versão Atualizada",
      data: {
        cliente: "Lucas Kim",
        vendedor: "Loja Tech",
        valor: 1700.0
      }
    }).then((response) => {
      expect(response.status).to.eq(200); // Valida status
      expect(response.body.name).to.contain("Atualizada"); // Teste adicional
    });
  });

  // Etapa 4: Deletar o pedido
  it('Deve remover o pedido do sistema', () => {
    cy.request('DELETE', `${baseUrl}/${orderId}`).then((response) => {
      expect(response.status).to.eq(200); // Valida status
      expect(response.body.message).to.contain("has been deleted"); // Valida remoção
    });
  });

  // Etapa 5: Validar cenário negativo
  it('Deve retornar 404 ao consultar o pedido deletado', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/${orderId}`,
      failOnStatusCode: false // Impede que o Cypress pare o teste ao ver o erro 404
    }).then((response) => {
      expect(response.status).to.eq(404); // Valida comportamento esperado
    });
  });
});

# Desafio de Automação de Testes de API - Fluxo de Pedidos

Este projeto faz parte de um desafio técnico para validar o ciclo de vida de um objeto em uma API REST, utilizando as ferramentas **Postman** (testes manuais) e **Cypress** (automação).

## Sobre o Desafio

O objetivo foi garantir a integridade dos dados em um fluxo de e-commerce fictício, passando pelas etapas de criação, consulta, edição e exclusão de registros.

### Cenários Testados:

1. **POST (Criar):** Cadastro de um novo pedido com validação de ID gerado.
2. **GET (Consultar):** Verificação se os dados salvos estão corretos no servidor.
3. **PUT (Atualizar):** Edição de informações do produto e valores.
4. **DELETE (Remover):** Exclusão do registro do banco de dados.
5. **GET (Negativo):** Tentativa de consulta de um ID deletado para validar a segurança e o retorno **404 Not Found**.

## 🛠️ Tecnologias Utilizadas

* **Postman:** Realização de testes manuais, gestão de ambientes (Environments) e validação de scripts de teste iniciais.
* **Cypress:** Automação dos testes de ponta a ponta (E2E) em JavaScript.
* **Node.js:** Ambiente de execução.
* **Git/GitHub:** Versionamento de código.

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**
```bash
git clone  https://github.com/LUZINETEMACIEL/desafio-automacao-api.git

```


2. **Instale as dependências:**
```bash
npm install

```


3. **Abra o Cypress:**
```bash
npx cypress open

```


4. No console do Cypress, selecione o arquivo `desafio_api.cy.js` para rodar os testes.

## 📊 Evidências de Teste

* **Vídeo do teste rodando:** (https://www.loom.com/share/6b33f71528444c57964f6afaffaee9a8)




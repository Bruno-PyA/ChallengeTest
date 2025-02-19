**Desafio de testes automatizados utilizando o Cypress.**

O intuito do projeto foi utilizar o Cypress para criar testes que validassem funcionalidades no site da Sauce Demo.
Os requisitos eram cumprir dentro deste site com o framework os seguintes cenários:

Login com credenciais válidas e inválidas. 
Adição de um produto ao carrinho e verificação se ele aparece corretamente. 
Remoção de um produto do carrinho.

**Estrutura do Projeto.**

cypress/: Contém os testes automatizados escritos com Cypress.
node_modules/: Dependências do projeto.
cypress.config.js: Configurações do Cypress.
package-lock.json: Arquivo gerado para garantir a consistência das dependências.
package.json: Gerenciamento das dependências e scripts do projeto.

Para a instalação dos repositórios, seguem as seguintes etapas:
Clone o repositório: "git clone https://github.com/Bruno-PyA/ChallengeTest.git"
Certifique-se de instalar as dependências: "npm install"

Existe a possibilidade de rodar o projeto tanto no terminal da IDE, ou em uma window do Cypress Test, para isso, execute no terminal: "npx cypress open "

O link do video no Youtube para ver os testes sendo executados é: https://youtu.be/AmxU6ehPgRE

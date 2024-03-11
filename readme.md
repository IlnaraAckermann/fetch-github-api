
DevQuest Resolver - Projeto de Resolução de Quest do Curso DevQuest
Este é um projeto pessoal desenvolvido para a resolução de uma Quest do curso DevQuest, utilizando a API do GitHub para obter informações e interagir com dados de usuários e repositórios.

Funcionalidades
Informações do Usuário

Exibe detalhes do usuário, incluindo:
Imagem do usuário
Nome completo do usuário
Login do usuário
Bio do usuário
Número de seguidores do usuário
Número de pessoas que o usuário está seguindo
Últimos Eventos no GitHub

Apresenta uma lista com até 10 últimos eventos do usuário no GitHub, incluindo eventos do tipo CreateEvent e PushEvent.
Para buscar os eventos, é utilizado o endpoint do GitHub:
https://api.github.com/users/{username}/events
Para cada atividade, são mostrados:
Nome do repositório
Mensagem do evento
Detalhes do Repositório

Exibe informações detalhadas de um repositório, incluindo:
Nome do repositório
Link para o repositório
Quantidade de forks do repositório
Quantidade de estrelas do repositório
Quantidade de watchers do repositório
Linguagem de programação do repositório
Como Utilizar
Clone o repositório:

bash
Copy code
git clone https://github.com/seu-usuario/devquest-resolver.git
Instale as dependências:
 ```
npm install
 ```
Execute o projeto:

```
npm start
```
Acesse no navegador:

Branches
O projeto possui as seguintes branches:

main: Contém o projeto final funcionando.
projeto-inicial: Branch para o projeto inicial.
solicitacao-1: Branch para a solicitação 1.
solicitacao-3: Branch para a solicitação 3.
solicitacao-4: Branch para a solicitação 

Abra o navegador e acesse http://localhost:3000
API do GitHub
Para acessar a API do GitHub, é necessário ter uma chave de acesso. Você pode obter a sua aqui.

Tecnologias Utilizadas
ReactJS
Axios
HTML5
CSS3
Autor
Este projeto foi desenvolvido por Ilnara Ackermann.

Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Observação: Substitua {username} nos links da API do GitHub pelos usuários desejados para obter as informações corretas.
# Descrição:
Um aplicativo web simples capaz de realizar operações CRUD em uma lista de contatos com nome e número de telefone.

O backend roda uma API ASP.NET, o frontend é feito em Angular e os dados são salvos em uma base de dados PostgreSQL.

# Execução:
1. Clone o repositório
``` bash
git clone https://github.com/JoemanJ/Lista-Telefonica-Onboarding.git
```

2. Navegue até a pasta do backend e execute a migration da base de dados
``` bash
cd Lista-Telefonica-Onboarding/backend/ListaTelefonicaAPI
dotnet ef database update
```

3. O aplicativo web estará disponível para acesso pelo navegador em http://localhost:8080.\
Acesse http://localhost:5167/swagger para ver a documentação das rotas da API.

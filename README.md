De acordo com a imagem do Modelo Relacional da Tabela Taco Normalizada, faça o que se pede:
- Importe, via código usando Mongoose, os registros das tabelas Grupo e Preparação, via arquivos CSVs, onde deverão ser gerados automaticamente UUIDs para cada registro;
- Importe, via código usando Mongoose, os registros da tabela Produto, via arquivo CSV, onde deverão ser gerados UUIDs para cada registro, localizar e relacionar o UUID dos Grupos gerados anteriormente;
- Importe, via código usando Mongoose, os registros da tabela ProdPrep, via arquivo CSV, onde deverão ser gerados UUIDS para cada registro, localizar e relacionar os UUIDS dos Produtos e Preparações, gerados anteriormente.
- A ideia é mantermos o relacionamento original, só que usando agora os UUIDs gerados automaticamente pelo Mongoose.

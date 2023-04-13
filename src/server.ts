// REQUISIÇÃO -> ME RETORNA ENDEREÇO USUÁRIO
// https://api.meusite.com/rota-de-endereço/123

// RESPOSTA -> RETORNA UM OBJETO NO FORMATO JSON
/*
{
  "id": 321,
  "street": "Rua A",
  "city": "Sobral"
}

ROTAS HTTP
- GET
- POST
- PUT
- DELETE

CRUD
C - CREATE
R - READ
U - UPDADE
D - DELETE

*/

import 'express-async-errors';
import { routes } from './routes';
import { errorMiddleware } from './errors/errorMiddleware';
import express from 'express';

const app = express();

app.use(express.json());
app.use(routes);

app.use(errorMiddleware);

app.listen(3333, () => {
  console.log('Server started on port 3333');
});

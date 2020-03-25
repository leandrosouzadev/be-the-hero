const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

//Em desenvolvimento setar a propriedade origin do endereco que ira consumir, que seria onde esta o front-end
// app.use(cors({
//     origin: "http://meuapp.com"
// }));

app.use(cors); //deixar assim para desenvolvimento
app.use(express.json());
app.use(routes);

app.listen(3333);
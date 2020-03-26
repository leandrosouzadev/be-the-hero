const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

//Em desenvolvimento setar a propriedade origem do endereco que ira consumir, que seria onde esta o front-end
// app.use(cors({
//     origin: "http://localhost:3333"
// }));
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
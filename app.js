const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

// Importamos el Router de Libros
const librosRouter = require("./routes/libros.js");
// Importamos el Middleware Error Handler
const errorHandler = require("./middleware/error.Handler.js");


app.use('/libros', librosRouter);
app.use(errorHandler);

app.listen(port, ()=> {
    console.log(`Servidor funcionando en el pueto http://localhost:${port}`)
});
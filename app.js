require('dotenv').config()
const express = require("express");
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');

// Handlebars
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático, llama la carpeta public y lee el archivo
app.use(express.static("public"));

// Rutas
app.get('/', (req, res) => { 
  res.render('home', {
    nombre: 'Fernando Herrera',
    titulo: 'Curso de Node'
  });
});

app.get("/generic", (req, res) => {
  res.render('generic')
});

app.get("/elements", (req, res) => {
  res.render('elements')
});

// app.get("/home", function (req, res) {
//   res.sendFile(__dirname + "/templated-roadtrip/index.html");
// });

/* app.get("/", function (req, res) {
  res.send("Home Page");
}); */

app.get("/hola", function (req, res) {
  res.send("Segunda ruta hola Mundo");
});


//Cuando armo el path con "__dirname" debo colocar "/public"
// app.get("*", function (req, res) {
//   res.sendFile(__dirname + "/public/404.html");
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

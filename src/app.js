const express = require("express");
const mongoose = require("mongoose");
const body_parser = require("body-parser");
require("dotenv").config();
const usuarios = require("./routes/user")
const User = require("./models/user");
const open = require('open');
 
const path = require("path");

// TODO: swagger
const SwaggerUI = require("swagger-ui-express");
const SwaggerJsDoc = require("swagger-jsdoc");
const SwaggerSpec = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "Login-Clothes Boys",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:8080",
      },
    ],
  },
  apis: [`${path.join(__dirname, "./routes/*.js")}`],
};

const app = express();
const port = process.env.PORT;

// middleware
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));

// routes
app.use("/", express.static("./public/"));
app.use("/api", usuarios)

app.use("/api-doc", SwaggerUI.serve, SwaggerUI.setup(SwaggerJsDoc(SwaggerSpec)));

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Ya estas conectao chibolo tarao."))
  .catch((err) => console.error(err));

app.post("/register", (req, res) => {
  const { correo, password } = req.body;

  const user = new User({ correo, password });

  user.save((error) => {
    if (error) {
      console.log("FALLO AL REGISTRAR");
      console.error(error);
    } else {
      console.log("USUARIO REGISTRADO");
      open("http://localhost:8080/index.html")
    }
  });
});
app.post("/authenticate", (req, res) => {
  const { correo, password } = req.body;

  User.findOne({ correo }, (error, result) => {
    if (error) {
      console.log("ERROR AL AUTENTICAR CORREO");
    } else if (!result) {
      console.log("EL CORREO NO EXISTE");
    } else {
      User.findOne({ password }, (error, result) => {
        if (error) {
          console.log("ERROR AL AUTENTICAR CONTRASEÑA");
          console.log(error);
        } else if (result) {
          console.log("CORREO Y CONTRASEÑA AUTENTICADO CORRECTAMENTE");
          open('http://localhost:8080/tienda.html');
        } else {
          console.log("CONTRASEÑA INCORRECTA");
        }
      });
    }
  }); 
});
app.listen(port, () => console.log("Servidor escuchando en el puerto:", port));

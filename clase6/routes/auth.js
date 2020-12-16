
const express = require('express');
const controller = require('../controllers/auth');//En este momento esta dentro de views/auth, por lo que se necesita salir y entrar a la carpeta correspondiente


const authRouter = express.Router()

authRouter.get('/', controller.renderAuth);// le pide mandar el archivo html que en este caso es auth.js en controllers.
//2. renderAuth hace referencia al metodo exports.renderAuth de auth.js en controllers



module.exports = authRouter
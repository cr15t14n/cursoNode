import express from 'express'
import controller from '../controllers/auth.js'
import bodyParser from 'body-parser'

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', controller.renderRegister);
router.get('/login',controller.renderLogin);
router.get('/register', controller.renderRegister)

router.post('/register', controller.register);
router.post('/login', controller.login);

export default router

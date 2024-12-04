const expres = require('express')
const app = express.Router()

const controller = require('../controllers/customer.controller')

app.get('/', controller.get)
app.get('/:id', controller.getById)
app.get('/name/:name', controller.getName)
app.get('/', controller.create)
app.get('/:id', controller.create)
app.get('/:id', controller.patch)
app.get('/:id', controller.rmCustomer)

module.exports = app
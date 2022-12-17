const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();
 
/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties: 
 *        correo:
 *          type: string
 *          description: the user email
 *        password:
 *          type: string
 *          description: the user password
 *      required:
 *          - correo
 *          - password
 *      example:
 *          correo: lesly@gmail.com
 *          password: lesly12345
 */

/**
 * @swagger
 * /api/usuarios:
 *  post:
 *    summary: crea un nuevo user
 *    tags: [User]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: operación realizada!!
 *      201:
 *        description: Usuario creado!!
 *      500:
 *        description: Error del servidor!!
 * 
 */
// Crear usuario 
router.post('/usuarios', (req, res) => {
    const user = userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

module.exports = router;

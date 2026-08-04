const UserService = require("../../services/UserService")

class UserController

{
    constructor()
    {
        this.usuarioService = new UserService()
    }

    async index(req, res)
    {
        res.render("HomeBlocked")
    }
}

module.exports = new UserController
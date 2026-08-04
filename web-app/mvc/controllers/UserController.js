const UserService = require("../../services/UserService")

class UserController

{
    constructor()
    {
        this.usuarioService = new UserService()
    }

    async index(req, res)
    {
        res.render("Home")
    }

    userSignUpView(req, res)
    {
        res.render("UserSignUp")
    }

//Tela de editar usuário
    async userEditView(req, res)
    {
        const user = await this.UserService.searchUser(req.params.id)
        res.render("UserEdit", { user: user })
    }

//Cadastrar usuário
    async userPostAsync(req, res)
    {
        const user = await this.userService.signUpUser(
            req.body.name,
            req.body.email,
            req.body.password
        )

        res.json({ user: user})
    }

//Atualizar usuário
    async userPutAsync(req, res)
    {
        const affectedRows = await this.userService.updateUser(
            req,body.id,
            req,body.name,
            req,body.email,
            req,body.password
        )

    }

//Deletar usuário
    async userDeleteAsync(req, res)
    {
        const affectedRows = await this.userService.deleteUser(req.params.id)
        res.json({ affectedRows: affectedRows })
    }


}

module.exports = new UserController
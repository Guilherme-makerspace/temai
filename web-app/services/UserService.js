const User = require("../mvc/models/UserModel")
const UserSchema = require("../schemas/UserSchema")

class UserService

{

    #userSchema

    constructor()
    {
        this.#userSchema = UserSchema;
    }

}

module.exports = UserService
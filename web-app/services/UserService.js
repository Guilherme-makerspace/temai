const User = require("../mvc/models/UserModel")
const UserSchema = require("../schemas/UserSchema")

class UserService

{

    #userSchema

    constructor()
    {
        this.#userSchema = UserSchema;
    }


//Cadastrar usuário
    async signUpUser(name, email, password)
    {
        const user = new User(name, email, password)
        
        const u = await this.#userSchema.create(
            {
                username: user.name,
                email: user.email,
                password: user.password
            }
        )

        return u;

    }
//

//Buscar usuário
    async searchUser(id) 
    {   
       const data = await this.#userSchema.findOne({
            where: { id: id }
        });

        if(!data){
            return null
        }

       const user = new User(
        data.email,
        data.password,
        data.name
       )

       user.id = data.id

       return user

    }
//

//Deletar usuário
    async deleteUser(id) 
    {   
        const user = await this.#userSchema.findOne({
            where: { id: id }
        });

        const affectedRows = await user.destroy()

        return affectedRows;
    }
//

//Atualizar usuário
    async updateUser(id, name, email, password)
    {
       
        let rows = 0;

        const user = await this.searchUser(id)

        if(user)
        {
           
            const model = new User(
                email || user.email , 
                password || user.password,
                name || user.name         
            )

             const affectedRows = await this.#userSchema.update(
                {
                    name: model.name,
                    email: model.email,
                    password: model.password
                },
                {
                    where: {
                        id: id
                    }
                }
            )

            rows = affectedRows
        }       

        return rows;
    }
//

}

module.exports = UserService
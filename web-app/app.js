const sequelize = require("./database/dbconfig");
const User = require("./schemas/UserSchema");
const server = require("./server");

async function run() {

    const port = 8080;

    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco realizada com sucesso.');
       
        await sequelize.sync({ force: true });
        console.log('Modelos sincronizados.');
   
        server.port = port;
        server.listen();

    } catch (error) {
        console.error('Erro ao iniciar a aplicação:', error);
    }
}

run();
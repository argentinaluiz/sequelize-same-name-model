import { Sequelize } from "sequelize-typescript";
import { Person } from "./model1";
import { Person as Person2 } from "./model2";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: ':memory:',
    models: [
        Person,
        Person2
    ], 
});

async function bootstrap(){
    await sequelize.sync()
}

bootstrap();
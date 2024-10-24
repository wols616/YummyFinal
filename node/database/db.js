import { Sequelize } from "sequelize";

const db = new Sequelize('yummi', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db
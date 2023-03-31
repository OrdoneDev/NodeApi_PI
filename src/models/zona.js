import { Sequelize } from "sequelize"
import database from "../config/database.js"

const Zona = database.define('zona', {
    id_zona: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(70),
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING(200),
        allowNull: false
    }
})

export default Zona
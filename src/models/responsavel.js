import { Sequelize } from "sequelize"
import database from "../../database.js"

const Responsavel = database.define('responsavel', {
    id_responsavel: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    cargo: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    setor: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
})

export default Responsavel
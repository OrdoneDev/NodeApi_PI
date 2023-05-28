import { Sequelize } from "sequelize"
import database from "../config/database.js"

const Responsavel = database.define('responsavels', {
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
    },
    login: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING(250),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(300),
        allowNull: true
    }
})

export default Responsavel
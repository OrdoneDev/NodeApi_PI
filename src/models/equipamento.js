import { Sequelize } from "sequelize"
import database from "../config/database.js"
import Tipos from "./tipo.js"

const Equipamento = database.define('equipamento', {
    id_equipamento: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    id_tipo: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING(300),
        allowNull: true
    },
    unidade_medida: {
        type: Sequelize.CHAR(2),
        allowNull: false
    },
    codigo_sap: {
        type: Sequelize.STRING(50),
        allowNull: true
    }
})

Equipamento.belongsTo(Tipos, {foreignKey: 'id_tipo', allowNull: false})

export default Equipamento
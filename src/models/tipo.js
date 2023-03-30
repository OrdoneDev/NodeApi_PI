import { Sequelize } from "sequelize"
import database from "../../database.js"

const Tipo = database.define('tipo', {
    id_tipo: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
})

export default Tipo
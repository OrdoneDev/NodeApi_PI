import { Sequelize } from "sequelize"
import database from "../../database.js"

const Equipamento = database.define('equipamento', {
    id_equipamento: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    id_tipo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'tipo',
            key: 'id_tipo'
        }
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

export default Equipamento
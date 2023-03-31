import { Sequelize } from "sequelize"
import database from "../config/database.js"

const Movimentacao = database.define('movimentacao', {
    id_movimentacao: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    id_equipamento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model:'equipamento',
            key: 'id_equipamento'
        }
    },
    id_zona: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'zona',
            key: 'id_zona'
        }
    },
    id_responsavel: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'responsavel',
            key: 'id_responsavel'
        }
    },
    data_entrada: {
        type: 'TIMESTAMP',
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    data_saida: {
        type: 'TIMESTAMP',
        allowNull: true
    },
    status: {
        type: Sequelize.TINYINT,
        allowNull: false
    },
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    observacao: {
        type: Sequelize.STRING(300),
        allowNull: true
    }
})

export default Movimentacao
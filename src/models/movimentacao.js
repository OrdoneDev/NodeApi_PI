import { Sequelize } from "sequelize"
import database from "../config/database.js"
import Equipamentos from "./equipamento.js"
import Zonas from "./zona.js"
import Responsaveis from "./responsavel.js"

const Movimentacao = database.define('movimentacaos', {
    id_movimentacao: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    id_equipamento: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_zona: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_responsavel: {
        type: Sequelize.INTEGER,
        allowNull: false
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

Movimentacao.belongsTo(Equipamentos, {foreignKey: 'id_equipamento', allowNull: false})
Movimentacao.belongsTo(Zonas, {foreignKey: 'id_zona', allowNull: false})
Movimentacao.belongsTo(Responsaveis, {foreignKey: 'id_responsavel', allowNull: false})

export default Movimentacao
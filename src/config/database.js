import { Sequelize } from 'sequelize'
import * as dotenv from 'dotenv'

dotenv.config()

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: process.env.DB_FILE
})

export const initDatabase = () => {
    sequelize
        .sync()
        .then(() => console.log('All tables created!'))
        .catch(( error ) => console.error('Error creating tables:', error))
}

export default sequelize

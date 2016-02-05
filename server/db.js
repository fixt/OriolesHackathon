import Sequelize from 'sequelize'

const DATABASE_URL = process.env.DATABASE_URL

const Conn = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: true
  }
})


const Pitch = Conn.define('pitch', {
  game_id: {
    type: Sequelize.STRING,
  },
  game_date: {
    type: Sequelize.DATE,
  },
  year: {
    type: Sequelize.INTEGER,
  },
  sv_pitch_id: {
    type: Sequelize.STRING,
    primaryKey: true,
  }
}, {
  timestamps: false,
})

export default Conn

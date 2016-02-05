import Sequelize from 'sequelize'

const DATABASE_URL = process.env.DATABASE_URL
const VERBOSE = process.env.NODE_ENV == 'production' ? false : console.log

const Conn = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: VERBOSE,
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
  },
  at_bat_number: {
    type: Sequelize.INTEGER,
  },
  pitch_number: {
    type: Sequelize.INTEGER,
  },
  inning: {
    type: Sequelize.INTEGER,
  },
  top_inning_sw: {
    type: Sequelize.STRING,
  },
  event_type: {
    type: Sequelize.STRING,
  },
  event_result: {
    type: Sequelize.STRING,
  },
  pre_balls: {
    type: Sequelize.INTEGER,
  },
  pre_strikes: {
    type: Sequelize.INTEGER,
  },
  pre_outs: {
    type: Sequelize.INTEGER,
  },
  batter_id: {
    type: Sequelize.INTEGER,
  },
  bat_side: {
    type: Sequelize.STRING,
  },
  pitcher_id: {
    type: Sequelize.INTEGER,
  },
  'throws': {
    type: Sequelize.STRING,
  },
  initial_speed: {
    type: Sequelize.DECIMAL,
  },
  plate_speed: {
    type: Sequelize.DECIMAL,
  },
  pitch_type: {
    type: Sequelize.STRING,
  },
  break_x: {
    type: Sequelize.DECIMAL,
  },
  break_z: {
    type: Sequelize.DECIMAL,
  },
  plate_x: {
    type: Sequelize.DECIMAL,
  },
  plate_z: {
    type: Sequelize.DECIMAL,
  },
  init_pos_x: {
    type: Sequelize.DECIMAL,
  },
  init_pos_y: {
    type: Sequelize.DECIMAL,
  },
  init_pos_z: {
    type: Sequelize.DECIMAL,
  },
  init_vel_x: {
    type: Sequelize.DECIMAL,
  },
  init_vel_y: {
    type: Sequelize.DECIMAL,
  },
  init_vel_z: {
    type: Sequelize.DECIMAL,
  },
  init_accel_x: {
    type: Sequelize.DECIMAL,
  },
  init_accel_y: {
    type: Sequelize.DECIMAL,
  },
  init_accel_z: {
    type: Sequelize.DECIMAL,
  },
  hittrajectory: {
    type: Sequelize.STRING,
  },
  playbyplay: {
    type: Sequelize.STRING,
  },
  runneron1st_id: {
    type: Sequelize.INTEGER,
  },
  runneron2nd_id: {
    type: Sequelize.INTEGER,
  },
  runneron3rd_id: {
    type: Sequelize.INTEGER,
  },
}, {
  timestamps: false,
})

const Pitcher = Conn.define('pitcher', {
  pitcher_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  }
}, {
  timestamps: false,
})

export default Conn

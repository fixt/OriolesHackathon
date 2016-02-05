const PROD_HOST = '';
const DEV_HOST = 'http://localhost:3000';
//const DEV_HOST = PROD_HOST;

const HOST = process.env.NODE_ENV == 'production' ? PROD_HOST : DEV_HOST;

function query(q, args) {
  console.log(q)

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/graphql',
  }

  const variables = JSON.stringify(args);

  const url = `${HOST}/graphql?query=${q}&variables=${variables}`

  return fetch(url, { credentials: true, headers })
    .then(checkStatus)
    .then(parseJSON)
    .then(checkErrors)
    .then(resp => resp.data)
}

function checkErrors(data) {
  if (data.errors) {
    console.error(`GraphQL Error: ${data.errors[0].message}`, data.errors)
  }

  return data;
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

const GET_PITCHES_BY_GAME = `
query getPitchesByGame($game_id: String) {
  pitches(game_id: $game_id) {
    game_id
    game_date
    year
    sv_pitch_id
    at_bat_number
    pitch_number
    inning
    top_inning_sw
    event_type
    event_result
    pre_balls
    pre_strikes
    pre_outs
    batter_id
    bat_side
    pitcher_id
    throws
    initial_speed
    plate_speed
    pitch_type
    break_x
    break_z
    plate_x
    plate_z
    init_pos_x
    init_pos_y
    init_pos_z
    init_vel_x
    init_vel_y
    init_vel_z
    init_accel_x
    init_accel_y
    init_accel_z
    hittrajectory
    playbyplay
    runneron1st_id
    runneron2nd_id
    runneron3rd_id
  }
}
`

export function getPitchesByGame(game_id) {
  return query(GET_PITCHES_BY_GAME, { game_id })
}

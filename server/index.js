import cors from 'cors'
import express from 'express'
import graphql from 'express-graphql'
import morgan from 'morgan'
import schema from '../schema'

const app = express()
const PORT = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(cors())
app.use(express.static('dist'))
app.use('/graphql', graphql({ schema: schema, pretty: true, graphiql: true }))

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

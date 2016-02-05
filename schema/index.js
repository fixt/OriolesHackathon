import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} from 'graphql'

import { attributeFields, resolver } from 'graphql-sequelize'
import db from '../server/db'

const Pitch = new GraphQLObjectType({
  name: 'Pitch',
  fields: { ...attributeFields(db.models.pitch) }
})

const Pitcher = new GraphQLObjectType({
  name: 'Pitcher',
  fields: { ...attributeFields(db.models.pitcher) }
})

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query object',
  fields: () => {
    return {
      pitches: {
        type: new GraphQLList(Pitch),
        args: {
          sv_pitch_id: { type: GraphQLString },
          game_id: { type: GraphQLString },
        },
        resolve: resolver(db.models.pitch)
      },
      pitchers: {
        type: new GraphQLList(Pitcher),
        args: {
          pitcher_id: { type: GraphQLInt },
        },
        resolve: resolver(db.models.pitcher)
      }
    }
  },

})

const Schema = new GraphQLSchema({
  query: Query
})

export default Schema

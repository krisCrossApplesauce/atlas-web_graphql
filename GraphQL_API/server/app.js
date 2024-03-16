const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');

mongoose.connect('mongodb+srv://krisCrossApplesauce:3kVkCI432s7GmXA0@mongodbforgraphqlprojec.pvql7ai.mongodb.net/?retryWrites=true&w=majority&appName=MongoDBForGraphQLProject');

const app = express();


mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('now listening for request on port 4000');
});

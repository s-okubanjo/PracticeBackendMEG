const express = require('express');
const graphqlHTTP = require('express-graphql');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const schema = require('./schema/schema');

const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));
app.listen(3000, () => {
  console.log('Listening on port 3000');
});

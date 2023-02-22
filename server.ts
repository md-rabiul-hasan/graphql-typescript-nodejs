import http from 'http';
import express, { Application, Request, Response } from 'express'
import { graphqlHTTP } from 'express-graphql'
import connectDB from "./config/database";
import { schema, resolver } from './schema'


import { config } from 'dotenv'
config();

//connect to db
connectDB()

const app: Application = express();
app.use(express.json());

app.use('/api/v1/graphql', graphqlHTTP({
    schema,
    rootValue: resolver,
    graphiql: true
}));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});


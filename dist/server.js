"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_graphql_1 = require("express-graphql");
var database_1 = __importDefault(require("./config/database"));
var schema_1 = require("./schema");
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
//connect to db
(0, database_1.default)();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/v1/graphql', (0, express_graphql_1.graphqlHTTP)({
    schema: schema_1.schema,
    rootValue: schema_1.resolver,
    graphiql: true
}));
app.listen(process.env.PORT, function () {
    console.log("Server is running on port ".concat(process.env.PORT));
});

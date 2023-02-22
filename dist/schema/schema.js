"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var schema = (0, graphql_1.buildSchema)("\n    type Query {\n        books(limit: Int): [Book]\n        book(id: ID!): Book\n    }\n\n    type Mutation {\n        addBook(title: String!, author: String!, description: String): BookResponse\n        updateBook(id: ID!, title: String!, author: String!, description: String!): BookResponse\n        deleteBook(id: ID!): DeleteResponse\n    }\n\n    type Book {\n        _id: ID!\n        title: String!\n        author: String!\n        description: String!\n    }\n\n    type BookResponse {\n        data: Book\n        error: String\n        success: Boolean\n    }\n\n    type DeleteResponse {\n        success: Boolean\n        message: String\n    }\n");
exports.default = schema;

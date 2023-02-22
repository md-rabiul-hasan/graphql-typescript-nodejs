import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Query {
        books(limit: Int): [Book]
        book(id: ID!): Book
    }

    type Mutation {
        addBook(title: String!, author: String!, description: String): BookResponse
        updateBook(id: ID!, title: String!, author: String!, description: String!): BookResponse
        deleteBook(id: ID!): DeleteResponse
    }

    type Book {
        _id: ID!
        title: String!
        author: String!
        description: String!
    }

    type BookResponse {
        data: Book
        error: String
        success: Boolean
    }

    type DeleteResponse {
        success: Boolean
        message: String
    }
`);

export default schema;
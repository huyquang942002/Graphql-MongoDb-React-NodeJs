const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    id: ID
    name: String
    genre: String
  }

  type Author {
    id: ID!
    name: String
    age: Int
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
    authors: [Author]
    author(id: ID!): Author
  }
`;

module.exports = typeDefs;
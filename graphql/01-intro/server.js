const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Comment {
    id: ID
    comment: String
    user: String
  }

  type Blog {
    id: ID
    title: String
    content: String
    comments: [Comment]
  }

  type Query {
    blogs: [Blog]
    blog(id: ID!): Blog
  }
`;

const blogs = [
  {
    id: "1",
    title: "示例博客标题1",
    content: "示例博客内容1",
    comments: [
      { id: 1, comment: "示例评论1", user: "示例用户1" },
      { id: 2, comment: "示例评论2", user: "示例用户2" },
      { id: 3, comment: "示例评论3", user: "示例用户3" },
    ],
  },
  {
    id: "2",
    title: "示例博客标题2",
    content: "示例博客内容2",
    comments: [],
  },
  {
    id: "3",
    title: "示例博客标题3",
    content: "示例博客内容3",
    comments: [],
  },
];

const resolvers = {
  Query: {
    // blogs 的数据来源
    blogs: () => blogs,
    // 带参数的 blog 的参数处理和数据来源
    blog: (parent, args) => {
      return blogs.find((blog) => blog.id === args.id);
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

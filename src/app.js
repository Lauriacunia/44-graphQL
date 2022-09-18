import express from "express";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDef } from "./graphql/schema.js";
import { resolvers } from "./graphql/resolvers.js";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import apiRouter from "./routes/indexRoutes.js";
import { connectMongoDB } from "./persistencia/configMongoDB.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: "GET, POST, PUT, DELETE, OPTIONS",
  })
);

//app.use("/api", apiRouter);
connectMongoDB();
/**Utiliza un solo endpoint */

const schema = makeExecutableSchema({
  typeDefs: typeDef,
  resolvers: resolvers,
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true, // interface gráfica para hacer consultas
  })
);

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () =>
  console.log(
    `🚀 Server started on PORT ${PORT} at ${new Date().toLocaleString()}`
  )
);
server.on("error", (err) => console.log(err));

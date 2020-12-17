import "reflect-metadata";
import {
  ConnectionOptions,
  Connection,
  createConnection,
  getConnection,
} from "typeorm";

// Will be true on deployed server
export const prod = process.env.NODE_ENV === "production";

export const config: ConnectionOptions = {
  name: "ChiefSocials",
  type: "mysql",
  host: "127.0.0.1",
  port: 3306,
  username: "root", // review
  password: "", // review
  database: "chiefsocials",
  synchronize: true,
  logging: false,
  //entities: ["lib/entity/**/*.js"],
  entities: ["entity/**/*.js"],

  // Production Mode
  ...(prod && {
    database: process.env.SERVER_SQL_DATABASE,
    username: process.env.SERVER_SQL_USERNAME,
    password: process.env.SERVER_SQL_USERNAME,
    host: "premium88.web-hosting.com",
    logging: false,
    synchronize: false,
  }),
};

export const connect = async () => {
  let connection: Connection;

  try {
    connection = getConnection(config.name);
    console.log(connection);
  } catch (err) {
    connection = await createConnection(config);
  }

  return connection;
};

module.exports = { connect, config, prod };

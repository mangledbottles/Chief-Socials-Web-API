// import { connect } from "../config";
// import { Users } from "../entity/UsersEntity";

// let connect = require("../config").connect;
// let Users = require("../entity/UsersEntity").Users;

let { connect } = require("../config.ts");
let { Users } = require("../entity/UsersEntity.ts");

exports.createUser = ({ name, email, password }) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!name || !email || !password)
        reject({ status: 400, message: "Missing parameters" });

      const connection = await connect();
      const repo = connection.getRepository(Users);

      const newUser = new Users();
      newUser.name = name;
      newUser.email = email;
      newUser.password = password;

      const savedUser = await repo.save(newUser);

      resolve(savedUser);
      //   console.log(connection);
      //   resolve({ message: "Account created" });
    } catch (error) {
      reject(error);
    }
  });
};

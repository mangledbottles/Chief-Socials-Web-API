import { resolveProjectReferencePath } from "typescript";
import { connect } from "../config";
import { Users } from "../entity/UsersEntity";

exports.createUser = ({ name, email, password }) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!name || !email || !password)
        reject({ status: 400, message: "Missing parameters" });

      // const connection = await connect()
      connect()
        .then(async (connection) => {
          const repo = connection.getRepository(Users);

          const newUser = new Users();
          newUser.name = name;
          newUser.email = email;
          newUser.password = password;

          const savedUser = await repo.save(newUser);

          resolve(savedUser);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      reject(error);
    }
  });
};

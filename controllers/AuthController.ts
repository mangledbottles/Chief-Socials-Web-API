"use strict";

interface User {
  name: string;
  email: string;
  password: string;
}

exports.createUser = ({ name, email, password }) => {
  return new Promise((resolve, reject) => {
    try {
      if (!name || !email || !password)
        reject({ status: 400, message: "Missing parameters" });

      resolve({ message: "Account created" });
    } catch (error) {
      reject(error);
    }
  });
};

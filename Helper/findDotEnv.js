import dotenv from "dotenv";
dotenv.config({ path: ".env" });
export const findDotEnv = (key) => {
  console.log(process.env.key);
  //   return process.env[key];
};

import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("PostMatch","postgres","ssn1jwof", {
  host: "localhost",
  port: 5432,
  dialect: "postgres"
});

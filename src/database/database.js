import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("PostMatch","postgres","password", {
  host: "localhost",
  port: 5432,
  dialect: "postgres"
});

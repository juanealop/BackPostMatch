import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Usuario = sequelize.define(
  "usuario", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    fotoPerfilUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    }
  },
  {
    timestamps: true
  }
);

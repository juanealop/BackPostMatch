import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Review = sequelize.define(
  "review", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    idUsuario: { // relacion con el usuario, una Review tiene un Usuario
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "usuarios",
        key: "id"
      }
    }
  },
  {
    timestamps: true
  }
);

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
    calificacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    numLikes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    numComentarios: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    idUsuario: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "usuarios",
        key: "id"
      }
    },
    idPartido: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "partidos",
        key: "id"
      }
    }
  },
  {
    timestamps: true
  }
);

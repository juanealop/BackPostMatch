import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Partido = sequelize.define(
  "partido", {
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
    categoria: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    visitante: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    local: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    golesLocal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    golesVisitante: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    posesionLocal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    posesionVisitante: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    tirosLocal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    tirosVisitante: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  },
  {
    timestamps: true
  }
);

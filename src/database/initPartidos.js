import { Partido } from "../model/Partido.js";

const initialPartidos = [
  {
    nombre: "FCB vs RM",
    categoria: "LaLiga",
    local: "RM",
    visitante: "FCB",
    golesLocal: 1,
    golesVisitante: 3,
    posesionLocal: 35,
    posesionVisistante: 65,
    tirosLocal: 7,
    tirosVisitante: 11,
    fecha: new Date("2024-01-01")
  },
  {
    nombre: "Atleti vs Sevilla",
    categoria: "LaLiga",
    local: "Atleti",
    visitante: "Sevilla",
    golesLocal: 1,
    golesVisitante: 1,
    posesionLocal: 50,
    posesionVisitante: 50,
    tirosLocal: 8,
    tirosVisitante: 6,
    fecha: new Date("2024-01-02")
  },
  {
    nombre: "Valencia vs Villarreal",
    categoria: "LaLiga",
    local: "Valencia",
    visitante: "Villarreal",
    golesLocal: 2,
    golesVisitante: 1,
    posesionLocal: 55,
    posesionVisitante: 45,
    tirosLocal: 10,
    tirosVisitante: 9,
    fecha: new Date("2024-01-03")
  },
  {
    nombre: "Betis vs Real Sociedad",
    categoria: "LaLiga",
    local: "Betis",
    visitante: "Real Sociedad",
    golesLocal: 0,
    golesVisitante: 2,
    posesionLocal: 48,
    posesionVisitante: 52,
    tirosLocal: 5,
    tirosVisitante: 12,
    fecha: new Date("2024-01-04")
  },
  {
    nombre: "Osasuna vs Celta",
    categoria: "LaLiga",
    local: "Osasuna",
    visitante: "Celta",
    golesLocal: 3,
    golesVisitante: 2,
    posesionLocal: 42,
    posesionVisitante: 58,
    tirosLocal: 14,
    tirosVisitante: 10,
    fecha: new Date("2024-01-05")
  },
  {
    nombre: "Mallorca vs Granada",
    categoria: "LaLiga",
    local: "Mallorca",
    visitante: "Granada",
    golesLocal: 1,
    golesVisitante: 0,
    posesionLocal: 60,
    posesionVisitante: 40,
    tirosLocal: 9,
    tirosVisitante: 5,
    fecha: new Date("2024-01-06")
  },
  {
    nombre: "Getafe vs Alavés",
    categoria: "LaLiga",
    local: "Getafe",
    visitante: "Alavés",
    golesLocal: 2,
    golesVisitante: 2,
    posesionLocal: 51,
    posesionVisitante: 49,
    tirosLocal: 11,
    tirosVisitante: 11,
    fecha: new Date("2024-01-07")
  }
];

// funcion asincrona para cargar los Partidos inciales
export async function loadInitialPartidos() {
  const count = await Partido.count();
  if(count === 0) {
    await Partido.bulkCreate(initialPartidos);
    console.log("Partidos iniciales creados");
  }
}

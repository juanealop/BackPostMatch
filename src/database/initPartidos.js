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
    fecha: new Date("2024-01-01"),
    partidoFotoUrl: "https://firebasestorage.googleapis.com/v0/b/postmatch-c2ddd.firebasestorage.app/o/matchImages%2Fbujit_jalil_stadium_mp.jpg?alt=media&token=3337b053-4218-4a25-9ec6-0e692d52faef"
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
    fecha: new Date("2024-01-02"),
    partidoFotoUrl: "https://firebasestorage.googleapis.com/v0/b/postmatch-c2ddd.firebasestorage.app/o/imageUtils%2Festadio_bernabeu.jpg?alt=media&token=426e4fc1-d913-4e53-8e2e-f771c7b8d030"
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
    fecha: new Date("2024-01-03"),
    partidoFotoUrl: "https://firebasestorage.googleapis.com/v0/b/postmatch-c2ddd.firebasestorage.app/o/matchImages%2FReungrado_Primero_de_Mayo_mp.jpg?alt=media&token=285d0073-5759-4265-83f9-1c1f4a685033"
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
    fecha: new Date("2024-01-04"),
    partidoFotoUrl: "https://firebasestorage.googleapis.com/v0/b/postmatch-c2ddd.firebasestorage.app/o/imageUtils%2Festadio_bernabeu.jpg?alt=media&token=426e4fc1-d913-4e53-8e2e-f771c7b8d030"
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
    fecha: new Date("2024-01-05"),
    partidoFotoUrl: "https://firebasestorage.googleapis.com/v0/b/postmatch-c2ddd.firebasestorage.app/o/matchImages%2Fsoccercity_johanessburgo_mp.jpg?alt=media&token=2e28bc30-3093-4292-ae6a-347656fac9ed"
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
    fecha: new Date("2024-01-06"),
    partidoFotoUrl: "https://firebasestorage.googleapis.com/v0/b/postmatch-c2ddd.firebasestorage.app/o/matchImages%2Fmichigan_stadium_mp.jpg?alt=media&token=0642a571-1878-4539-8f89-f743cb505eb1"
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
    fecha: new Date("2024-01-07"),
    partidoFotoUrl: "https://firebasestorage.googleapis.com/v0/b/postmatch-c2ddd.firebasestorage.app/o/matchImages%2Fwebley_stadium2_mp.jpg?alt=media&token=d5d1a68f-7ee0-4dce-b785-0abb3c9c349c"
  },
  {
    nombre: "Rayo Vallecano vs Espanyol",
    categoria: "LaLiga",
    local: "Rayo Vallecano",
    visitante: "Espanyol",
    golesLocal: 0,
    golesVisitante: 1,
    posesionLocal: 53,
    posesionVisitante: 47,
    tirosLocal: 8,
    tirosVisitante: 10,
    fecha: new Date("2024-01-08"),
    partidoFotoUrl: "https://firebasestorage.googleapis.com/v0/b/postmatch-c2ddd.firebasestorage.app/o/matchImages%2Flusail_stadium_mp.webp?alt=media&token=a0825053-4cf7-47f6-bde0-fc296beeab65"
  },
  {
    nombre: "Cádiz vs Girona",
    categoria: "LaLiga",
    local: "Cádiz",
    visitante: "Girona",
    golesLocal: 1,
    golesVisitante: 3,
    posesionLocal: 37,
    posesionVisitante: 63,
    tirosLocal: 6,
    tirosVisitante: 13,
    fecha: new Date("2024-01-09"),
    partidoFotoUrl: "https://firebasestorage.googleapis.com/v0/b/postmatch-c2ddd.firebasestorage.app/o/matchImages%2Fbujit_jalil_stadium_mp.jpg?alt=media&token=3337b053-4218-4a25-9ec6-0e692d52faef"
  },
  {
    nombre: "Las Palmas vs Athletic Club",
    categoria: "LaLiga",
    local: "Las Palmas",
    visitante: "Athletic Club",
    golesLocal: 2,
    golesVisitante: 2,
    posesionLocal: 44,
    posesionVisitante: 56,
    tirosLocal: 12,
    tirosVisitante: 15,
    fecha: new Date("2024-01-10"),
    partidoFotoUrl: "https://firebasestorage.googleapis.com/v0/b/postmatch-c2ddd.firebasestorage.app/o/imageUtils%2Festadio_bernabeu.jpg?alt=media&token=426e4fc1-d913-4e53-8e2e-f771c7b8d030"
  }
];

// funcion asincrona para cargar los Partidos inciales
export async function loadInitialPartidos() {
  const count = await Partido.count();
  if (count === 0) {
    await Partido.bulkCreate(initialPartidos);
    console.log("Partidos iniciales creados");
  }
}

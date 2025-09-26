import { Review } from "../model/Review.js";

const initialReviews = [
  {
    titulo: "FCB vs RM",
    descripcion: "Partido dificil, pero gana finalmente el FCB",
    fecha: new Date("2024-09-01"),
    idUsuario: 1,
    idPartido: 1
  },
  {
    titulo: "Atleti vs Sevilla",
    descripcion: "Partido muy cerrado, empate 1-1",
    fecha: new Date("2024-09-02"),
    idUsuario: 2,
    idPartido: 2,
  },
  {
    titulo: "Valencia vs Villarreal",
    descripcion: "Victoria del Valencia con remontada en el segundo tiempo",
    fecha: new Date("2024-09-03"),
    idUsuario: 1,
    idPartido: 3
  },
  {
    titulo: "Betis vs Real Sociedad",
    descripcion: "Gran dominio de la Real Sociedad para llevarse los 3 puntos",
    fecha: new Date("2024-09-04"),
    idUsuario: 3,
    idPartido: 4
  },
  {
    titulo: "Osasuna vs Celta",
    descripcion: "Osasuna supo aguantar y se quedó con la victoria",
    fecha: new Date("2024-09-05"),
    idUsuario: 2,
    idPartido: 5
  },
  {
    titulo: "Mallorca vs Granada",
    descripcion: "Partido intenso en el medio campo, triunfo por la mínima de Mallorca",
    fecha: new Date("2024-09-06"),
    idUsuario: 1,
    idPartido: 6
  },
  {
    titulo: "Getafe vs Alavés",
    descripcion: "Empate justo entre dos equipos muy parejos",
    fecha: new Date("2024-09-07"),
    idUsuario: 3,
    idPartido: 7
  },
  {
    titulo: "Rayo Vallecano vs Espanyol",
    descripcion: "Espanyol aprovechó su oportunidad y se llevó la victoria",
    fecha: new Date("2024-09-08"),
    idUsuario: 2,
    idPartido: 8
  },
  {
    titulo: "Cádiz vs Girona",
    descripcion: "Girona fue superior durante todo el partido",
    fecha: new Date("2024-09-09"),
    idUsuario: 1,
    idPartido: 9
  },
  {
    titulo: "Las Palmas vs Athletic Club",
    descripcion: "Partido vibrante, Las Palmas logró empatar en los últimos minutos",
    fecha: new Date("2024-09-10"),
    idUsuario: 3,
    idPartido: 10
  }
];

// funcion asincrona para cargar las Reviews iniciales
export async function loadInitialReviews() {

  const count = await Review.count();
  if(count === 0) {
    await Review.bulkCreate(initialReviews);
    console.log("Reviews iniciales creadas");
  }

}

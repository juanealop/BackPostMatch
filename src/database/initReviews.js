import { Review } from "../model/Review.js";

const initialReviews = [
  {
    titulo: "FCB vs RM",
    descripcion: "Partido difícil, pero gana finalmente el FCB",
    fecha: new Date("2024-09-01"),
    calificacion: 5,
    numLikes: 10,
    numComentarios: 3,
    idUsuario: 1,
    idPartido: 1
  },
  {
    titulo: "Atleti vs Sevilla",
    descripcion: "Partido muy cerrado, empate 1-1",
    fecha: new Date("2024-09-02"),
    calificacion: 4,
    numLikes: 7,
    numComentarios: 2,
    idUsuario: 2,
    idPartido: 2
  },
  {
    titulo: "Valencia vs Villarreal",
    descripcion: "Victoria del Valencia con remontada en el segundo tiempo",
    fecha: new Date("2024-09-03"),
    calificacion: 3,
    numLikes: 5,
    numComentarios: 1,
    idUsuario: 1,
    idPartido: 3
  }
];

// funcion asincrona para cargar las Reviews iniciales
export async function loadInitialReviews() {
  const count = await Review.count();
  if (count === 0) {
    await Review.bulkCreate(initialReviews);
    console.log("Reviews iniciales creadas");
  }
}

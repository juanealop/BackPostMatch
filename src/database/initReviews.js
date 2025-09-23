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

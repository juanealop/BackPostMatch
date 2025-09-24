import rutasUsuario from "./routes/usuario.routes.js";
import rutasReview from "./routes/review.routes.js";
import rutasPartido from "./routes/partido.routes.js";
import express from "express";

const app = express();
app.use(express.json());
app.use(rutasUsuario);
app.use(rutasReview);
app.use(rutasPartido);

export default app;

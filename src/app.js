import rutasUsuario from "./routes/usuario.routes.js";
import rutasReview from "./routes/review.routes.js";
import express from "express";

const app = express();
app.use(express.json());
app.use(rutasUsuario);
app.use(rutasReview);

export default app;

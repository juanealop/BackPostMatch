import { Usuario } from "./Usuario.js";
import { Review } from "./Review.js";
import { Partido } from "./Partido.js";

export function setupRelations() {

//----------- SECTION Usuario tiene muchas Reviews <=> Review tiene un Usuario ----------------

  Usuario.hasMany(Review, {
    foreignKey: "idUsuario",
    as: "reviews", // permite realizar consultas usuario.getReviews()
    onDelete: "cascade",
    hooks: true
  });

  Review.belongsTo(Usuario, {
    foreignKey: "idUsuario",
    as: "usuario" // permite realizar review.getUsuario()
  });

//----------- SECTION Partido tiene muchas Reviews <=> Review tiene un Partido ----------------

  Partido.hasMany(Review, {
    foreignKey: "idUsuario",
    as: "reviews", // permite realizar partido.getReviews()
    onDelete: "cascade",
    hooks: true
  });

  Review.belongsTo(Partido, {
    foreignKey: "idPartido",
    as: "partido" // permite realizar review.getPartido()
  });

}


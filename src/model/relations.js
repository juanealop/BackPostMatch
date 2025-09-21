import { Usuario } from "./Usuario.js";
import { Review } from "./Review.js";
import { Partido } from "./Partido.js";

export function setupRelations() {

  Usuario.hasMany(Review, {
    foreignKey: "idReview",
    as: "reviews", // permite realizar consultas usuario.getReviews()
    onDelete: "cascade",
    hooks: true
  });

  Review.belongsTo(Usuario, {
    foreignKey: "idUsuario",
    as: "usuario", // permite realizar usuario.getUsuario()
  });

}


import app from "./app.js";
import { sequelize } from "./database/database.js";
import { loadInitialUsuarios } from "./database/initUsuarios.js";
import { loadInitialReviews } from "./database/initReviews.js";
import { setupRelations } from "./model/relations.js";
import "./model/Review.js" 
import "./model/Partido.js"
import "./model/Usuario.js"

async function init() {

  try {
    await sequelize
      .authenticate()
      .then(() => {
        console.log("Conexion establecida exitosamente");
      })
      .catch((err) => {
        console.error("Conexion fallida:",err);
      });

    await sequelize.sync({ force: true }); // crea las tablas

    await loadInitialUsuarios(); // cargar primero los Usuarios 
    await loadInitialReviews(); // cargar las Reviews

    app.listen(3000, () => { // servidor escuchando en el puerto 3000
      console.log("Servidor en puerto 3000");
    });
  } catch(error) {
    console.error(error);
  }

}

init();

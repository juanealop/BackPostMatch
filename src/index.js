import app from "./app.js";

function init() {
  app.listen(3000, () => {
    console.log("Servidor en puerto 3000");
  });
}

init();

import { Usuario } from "../model/Usuario.js";

const initialUsuarios = [
  {
    nombre: "Julio",
    email: "julio@email.com",
    password: "123456",
    fotoPerfilUrl: "foto.png"
  },
  {
    nombre: "Ana",
    email: "ana@email.com",
    password: "ana123",
    fotoPerfilUrl: "ana.png"
  },
  {
    nombre: "Carlos",
    email: "carlos@email.com",
    password: "carlos456",
    fotoPerfilUrl: "carlos.png"
  },
  {
    nombre: "Lucía",
    email: "lucia@email.com",
    password: "lucia789",
    fotoPerfilUrl: "lucia.png"
  }
];

export async function loadInitialUsuarios() {
  try {
    const count = await Usuario.count();
    if(count === 0) {
      await Usuario.bulkCreate(initialUsuarios);
      console.log("Usuarios iniciales creados");
    } else {
      console.log("Ya exiten usuarios en el DB");
    }
  } catch(error) {
    console.error(error);
  }
}

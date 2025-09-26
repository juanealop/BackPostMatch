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
  },
  {
    nombre: "María",
    email: "maria@email.com",
    password: "maria123",
    fotoPerfilUrl: "maria.png"
  },
  {
    nombre: "Pedro",
    email: "pedro@email.com",
    password: "pedro456",
    fotoPerfilUrl: "pedro.png"
  },
  {
    nombre: "Sofía",
    email: "sofia@email.com",
    password: "sofia789",
    fotoPerfilUrl: "sofia.png"
  },
  {
    nombre: "Andrés",
    email: "andres@email.com",
    password: "andres321",
    fotoPerfilUrl: "andres.png"
  },
  {
    nombre: "Elena",
    email: "elena@email.com",
    password: "elena654",
    fotoPerfilUrl: "elena.png"
  },
  {
    nombre: "Miguel",
    email: "miguel@email.com",
    password: "miguel987",
    fotoPerfilUrl: "miguel.png"
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

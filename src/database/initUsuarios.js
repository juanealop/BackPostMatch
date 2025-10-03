import { Usuario } from "../model/Usuario.js";

const initialUsuarios = [
  {
    nombre: "Pedro",
    email: "p@noemail",
    password: "54321",
    fotoPerfilUrl: "https://firebasestorage.googleapis.com/v0/b/postmatch-c2ddd.firebasestorage.app/o/imageUtils%2Fusuario_foto_perfil_01.jpg?alt=media&token=f8b0fe4f-86bd-4341-ba0b-0e0b10da1ea60"
  },
  {
    nombre: "Juan",
    email: "j@noemail",
    password: "12345",
    fotoPerfilUrl: "https://firebasestorage.googleapis.com/v0/b/postmatch-c2ddd.firebasestorage.app/o/profileImages%2Fyawarcru_pp.jpg?alt=media&token=5d689aa9-b34d-4d64-b2b4-d6ffa2aa4f91"
  },
  {
    nombre: "Ana",
    email: "a@noemail",
    password: "password123",
    fotoPerfilUrl: "https://firebasestorage.googleapis.com/v0/b/postmatch-c2ddd.firebasestorage.app/o/profileImages%2Flambo_pp.jpg?alt=media&token=83666719-dee3-403f-bdb2-d5f316e4a065"
  },
  {
    nombre: "Maria",
    email: "m@noemail",
    password: "securepassword",
    fotoPerfilUrl: "https://firebasestorage.googleapis.com/v0/b/postmatch-c2ddd.firebasestorage.app/o/profileImages%2FminecraftSteve_pp.jpg?alt=media&token=143cd863-f869-4f7a-844f-f629b862403b"
  },
  // puedes mantener los demás usuarios de relleno con imágenes locales si quieres
  {
    nombre: "Lucía",
    email: "lucia@email.com",
    password: "lucia789",
    fotoPerfilUrl: "lucia.png"
  },
  {
    nombre: "Carlos",
    email: "carlos@email.com",
    password: "carlos456",
    fotoPerfilUrl: "carlos.png"
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
    if (count === 0) {
      await Usuario.bulkCreate(initialUsuarios);
      console.log("Usuarios iniciales creados");
    } else {
      console.log("Ya existen usuarios en el DB");
    }
  } catch (error) {
    console.error(error);
  }
}

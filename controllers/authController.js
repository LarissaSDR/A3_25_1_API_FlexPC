import { auth } from "../services/firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { collection, query, where, getDocs } from "firebase/firestore"; modelo antigo 
// import jwt from "jsonwebtoken"; modelo antigo

const SECRET_KEY = "flexpc-secret";

export function register(req, res) {
  const { email, senha} = req.body;

  createUserWithEmailAndPassword(auth, email, senha)
    .then(userCredential => {
      const user = userCredential.user;
      res.status(201).json({message: "Usuário registrado", uid: user.uid });
    })
    .catch(error => {
      console.error(error);
      res.status(500).send("Erro ao registrar usuário");
    });
}

export function login(req, res) {
  const { email, senha } = req.body;

  signInWithEmailAndPassword(auth, email, senha)
    .then(userCredential => {
      const user = userCredential.user;
      return user.getIdToken();
    })
    .then(token => {
      res.json({ token });
    })
    .catch(error => {
      console.error(error);
      res.status(401).send("Email ou senha Inválidos");
    });
}

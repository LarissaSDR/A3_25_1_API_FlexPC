import { db } from "../services/firebase.js";
import { collection, doc, setDoc, getDoc, getDocs, deleteDoc, updateDoc } from "firebase/firestore";

export function createUser(req, res) {
    const { id, nome, email, senha, tipo } = req.body;

    setDoc(doc(db, "usuarios", id), { nome, email, senha, tipo })
    .then(() => res.status(201).send("Usuário criado com sucesso!"))
    .catch(() => res.status(500).send("Erro ao criar usuário."));
}

export function getAllUsers(req, res){
    getDocs(collection(db, "usuarios"))
        .then(snapshot => {
            const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            res.json(users);
        })
        .catch(() => res.status(500).send("Erro ao buscar usuários"));
}

export function getUserById(req, res){
    const id = req.params.id;

    getDoc(doc(db, "usuarios", id))
        .then(docSnap => {
            if (docSnap.exists()) res.json(docSnap.data());
            else res.status(404).send("Usuário não encontrado");
        })
        .catch(() => res.status(500).send("Erro ao buscar usuário"));
}

export function deleteUser(req, res){
    const id = req.params.id;

    deleteDoc(doc(db, "usuarios", id))
        .then(() => res.send("Usuário deletado"))
        .catch(() => res.status(500).send("Erro ao deletar usuário"));
}

export function updateUser(req, res) {
    const id = req.params.id;
    const novosDados = req.body;

    updateDoc(doc(db, "usuarios", id), novosDados)
        .then(() => res.send("Usuário atualizado com sucesso"))
        .catch((error) => {
            console.error("Erro ao atualizar usuário", error);
            res.status(500).send("Erro ao atualizar usuário");
        });
}
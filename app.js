import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import usersRouter from "./routes/users.js";
import authRouter from "./routes/auth.js";
import cors from 'cors'

const app = express()

app.use(cors()) 


app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/users", usersRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
    res.send("API FlexPC no ar!");
});

const PORT = 3000;
app.listen(PORT, () => {
console.log(`Servidor rodando em http://localhost:${PORT}`);
});

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Hola mundo" });
});

app.listen(3002, () => {
  console.log("Servidor iniciado en http://localhost:3002");
});

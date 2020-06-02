import express from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("listagem de usuários");

  response.json(["Angélica", "Emidio", "Flávio", "Larissa"]);
});

app.listen(3333);

import express from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("listagem de usuários");

  return response.json(["Angélica", "Emidio", "Flávio", "Larissa"]);
});

app.post("/users", (request, response) => {
  const user = {
    name: "Angélica",
    email: "angelica@provedor.com",
  };
  return response.json(user);
});

app.listen(3333);

import express from "express";

const app = express();

const users = ["Angélica", "Emidio", "Flávio", "Larissa"];

app.get("/users", (request, response) => {
  const search = request.query.search;
  console.log(search);

  return response.json(users);
});

app.get("/users/:id", (request, response) => {
  const id = Number(request.params.id);

  const user = users[id];

  return response.json(user);
});

app.post("/users", (request, response) => {
  const user = {
    name: "Angélica",
    email: "angelica@provedor.com",
  };
  return response.json(user);
});

app.listen(3333);

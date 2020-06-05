import express from "express";
import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/itemsController";

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get("/items", itemsController.index);

routes.post("/points", pointsController.create);

export default routes;

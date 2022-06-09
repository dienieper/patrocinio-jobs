import { Router } from "express";
import CreateVacancyController from "./app/controllers/CreateVacancyController";

const routes = Router();

const createVacancyController = new CreateVacancyController();

routes.get("/", createVacancyController.execute);

export default routes;

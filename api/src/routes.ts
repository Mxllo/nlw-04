import {Router} from 'express';
import { SurveyController } from './controller/SurveysController';
import { UserController } from './controller/UserController';

const router = Router();

const userController = new UserController();
const surveyController = new SurveyController();

router.post("/users", userController.create);
router.get("/users", userController.findAll);
router.post("/surveys", surveyController.create);
router.get("/surveys", surveyController.findAll);


export { router };
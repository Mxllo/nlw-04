import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveyRepository } from "../repositories/SurveyRepository";

class SurveyController{
    async create(req: Request, res: Response){
        const surveysRepository = getCustomRepository(SurveyRepository);

        const user = surveysRepository.create(req.body);
        await surveysRepository.save(user)
        return res.status(201).json(user);
    }

    async findAll(req: Request, res: Response){
        const surveyRepository = getCustomRepository(SurveyRepository);
        const all = await surveyRepository.find();
        return res.json(all).status(200);
    }
}

export { SurveyController };

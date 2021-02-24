import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

class UserController{
    async create(req: Request, res: Response){
        const usersRepository = getCustomRepository(UserRepository);
        const email = req.body.email;

        if(await usersRepository.findOne({email})){
            return res.status(400).json({"error": "User already exists"});
        }

        const user = usersRepository.create(req.body);
        await usersRepository.save(user)
        return res.json(user);
    }
}

export { UserController };

import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { User } from "../models/User";
import { UserRepository } from "../repositories/UserRepository";
import { UserService } from "../services/UserService";

class UserController{
    async create(req: Request, res: Response){
        const usersRepository = getCustomRepository(UserRepository);
        const email = req.body.email;
        if(await usersRepository.findOne({email})){
            return res.status(400).json({"error": "User already exists"});
        }

        const user = usersRepository.create(req.body);
        await usersRepository.save(user)
        return res.json(user).status(200);
    }

    async findAll(req: Request, res: Response){
        const usersRepository = getCustomRepository(UserRepository);
        const allUsers = await usersRepository.find();
        return res.json(allUsers).status(200);
    }
}

export { UserController };

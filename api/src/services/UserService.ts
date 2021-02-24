import { getCustomRepository } from "typeorm";
import { User } from "../models/user";
import { UserRepository } from "../repositories/UserRepository";

class UserService{
/*
    static save(body: JSON): User{
        const usersRepository = getCustomRepository(UserRepository);
        const user = usersRepository.create(body);
        return ;
    }

    checkAlreadyExists(body: JSON): boolean{
        if(await usersRepository.findOne({email})){
            return res.status(400).json({"error": "User already exists"});
        }
        
        return true;
    }
    */
}
export{UserService};
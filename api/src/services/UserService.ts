import { getCustomRepository } from "typeorm";
import { User } from "../models/User";
import { UserRepository } from "../repositories/UserRepository";

class UserService{

/*
    function save(req: Request) {
        const usersRepository = getCustomRepository(UserRepository);
        const user = usersRepository.create(req.body);
        return user;
    }

    function checkAlreadyExists(req : Request){
        const email = req.body.email;
        if(await usersRepository.findOne({email})){
            return res.status(400).json({"error": "User already exists"});
        }
        
        return true;
    }

*/
}
export{UserService};
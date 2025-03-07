import { IUserRepository } from "../repository/interface/user-repository-interface";

export class UserService{
    constructor(private userRepository: IUserRepository){}

    async createUser(data: any){
        
        return await this.userRepository.createUser(data);
    }

    
}
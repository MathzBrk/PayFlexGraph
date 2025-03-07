import { UserType, DocumentType } from "@prisma/client";
import { CreateUserInput } from "../../dtos/input/create-user-input";
import { User } from "../../dtos/model/user";

export interface IUserRepository{
    createUser(user: CreateUserInput, userType: UserType, docType: DocumentType): Promise<User>;
    getUsers(): Promise<User[]>;
    deleteUser(id: string): Promise<User>;
}
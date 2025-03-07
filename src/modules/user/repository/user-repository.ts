import { DocumentType, PrismaClient, UserType } from "@prisma/client";
import { IUserRepository } from "./interface/user-repository-interface";
import { CreateUserInput } from "../dtos/input/create-user-input";
import { User } from "../dtos/model/user";

export class UserRepository implements IUserRepository{
    private prisma = new PrismaClient();

    async createUser(data: CreateUserInput, userType: UserType, docType: DocumentType): Promise<User> {
        console.log("email", data.email);
        
        return await this.prisma.user.create({
            data: {
                ...data,
                userType: userType,
                docuementType: docType
            }
        });
    }

    async deleteUser(id: string): Promise<User> {

        return await this.prisma.user.delete({
            where: {
                id: id
            }
        });
    }

    async getUsers(): Promise<User[]> {
        return await this.prisma.user.findMany();
    }



}
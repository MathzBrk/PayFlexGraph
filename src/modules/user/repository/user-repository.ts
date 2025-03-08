import { DocumentType, PrismaClient, UserType } from "@prisma/client";
import { IUserRepository } from "./interface/user-repository-interface";
import { CreateUserInput } from "../dtos/input/create-user-input";
import { User } from "../dtos/model/user";

export class UserRepository implements IUserRepository{
    
    constructor(private prisma: PrismaClient){}

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

    async getUserByEmail(email: string): Promise<User | null> {
        return await this.prisma.user.findFirst({
            where: {
                email: email
            }
        });
    }

    async getUserByDocuemnt(document: string): Promise<User | null> {
        return await this.prisma.user.findFirst({
            where: {
                document: document
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
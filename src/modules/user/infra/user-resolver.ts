import { Arg, Ctx, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";
import {User} from "../dtos/model/user";
import { CreateUserInput } from "../dtos/input/create-user-input";
import { DocumentType, Prisma, PrismaClient, UserType } from "@prisma/client";
import { IUserRepository } from "../repository/interface/user-repository-interface";
import { determineDocument } from "../service/document-service";
import { UserRepository } from "../repository/user-repository";
import { UserValidationMiddleware } from "../../middlewares/user-validation-middleware";
import { MyContext } from "../../middlewares/interfaces/context";


@Resolver(() => User)
@UseMiddleware(UserValidationMiddleware)
export class UserResolver {

    @Mutation(() => User)
    async createUser(@Arg('data') data: CreateUserInput, @Ctx() context: MyContext): Promise<User> {

        const document: DocumentType = determineDocument(data.document);

        const userType: UserType = document === DocumentType.CPF ? UserType.COMMON : UserType.MERCHANT;

        return await context.userRepository.createUser(data, userType, document);
    }

    @Mutation(() => Boolean)
    async deleteUser(@Arg('id') id: string, @Ctx() context: MyContext): Promise<boolean> {
        if (!id) {
            throw new Error("Id is empty!");
        }

        try {
            const user: User | null = await context.userRepository.deleteUser(id);
            
            if (!user) {
                throw new Error("User not found!");
            }

            return true;
        } catch (error: Error | any) {
            if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
                throw new Error("User not found!");
            }
            throw new Error("Error deleting user: " + error.message);
        }
    }

    @Query(() => [User])
    async getUsers(@Ctx() context: MyContext): Promise<User[]> {
        const users: User[] = await context.userRepository.getUsers();
        return users;
    }

    

}
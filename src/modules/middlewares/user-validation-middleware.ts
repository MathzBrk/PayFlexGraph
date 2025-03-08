import { MiddlewareFn } from "type-graphql";
import { MyContext } from "./interfaces/context";
import { CreateUserInput } from "../user/dtos/input/create-user-input";
import { EmailAlreadyExistsError } from "../../errors/email-already-exists-error";
import { DocumentExistsError } from "../../errors/document-already-exists-error";
import { ValidationError } from "class-validator";

export const UserValidationMiddleware: MiddlewareFn<MyContext> = async ({ args, context }, next) => {
    const data: CreateUserInput = args.data;

    if(data.email){
        const user = await context.userRepository.getUserByEmail(data.email);
        if(user){
            throw new EmailAlreadyExistsError();
        }
    }

    if(data.document){
        const user = await context.userRepository.getUserByDocuemnt(data.document);
        if(user){
            throw new DocumentExistsError();
        }
    }


    return next();

}
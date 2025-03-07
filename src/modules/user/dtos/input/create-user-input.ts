import { InputType, Field } from "type-graphql";

@InputType("CreateUserInput", {})
export class CreateUserInput {
    
    @Field()
    fullName: string;
    
    @Field()
    email: string;

    @Field()
    password: string;

    @Field()
    document: string;

}
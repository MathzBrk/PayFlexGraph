import { IsEmail, isEmail, IsNotEmpty, IsString, MaxLength } from "class-validator";
import { InputType, Field } from "type-graphql";

@InputType("CreateUserInput", {})
export class CreateUserInput {
    
    @Field()
    @IsNotEmpty()
    @MaxLength(30)
    @IsString()
    fullName: string;
    
    @Field()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @Field()
    @IsNotEmpty()
    @MaxLength(30)
    @IsString()
    password: string;

    @Field()
    @IsNotEmpty()
    @IsString()
    document: string;

}
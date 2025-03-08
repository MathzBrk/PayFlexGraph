import { IsNotEmpty, IsString } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class CreateWalletInput {
    
    @Field()
    @IsNotEmpty()
    @IsString()
    ownerId: string;
    
}
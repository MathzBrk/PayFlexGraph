import { IsNotEmpty } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class CreateDepositInput {
    
    @Field()
    @IsNotEmpty()
    id: number;
    
    @Field()
    @IsNotEmpty()
    balance:number
    
}
import { IsNotEmpty } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class CreateTransactionInput {
    
    @Field()
    @IsNotEmpty()
    payeeId: number;
    
    @Field()
    @IsNotEmpty()
    payerId:number

    @Field()
    @IsNotEmpty()
    value:number
    
}
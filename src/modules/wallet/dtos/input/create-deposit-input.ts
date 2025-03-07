import { Field, InputType } from "type-graphql";

@InputType()
export class CreateDepositInput {
    
    @Field()
    id: number;
    
    @Field()
    balance:number
    
}
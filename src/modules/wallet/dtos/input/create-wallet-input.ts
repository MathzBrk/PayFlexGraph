import { Field, InputType } from "type-graphql";

@InputType()
export class CreateWalletInput {
    
    @Field()
    ownerId: string;
    
}
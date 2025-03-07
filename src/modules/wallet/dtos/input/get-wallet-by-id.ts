import { Field, InputType } from "type-graphql";

@InputType()
export class GetWalletByIdInput {
    
    @Field()
    id: number;
    
}
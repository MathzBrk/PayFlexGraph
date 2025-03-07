import {Field,ObjectType,Float} from "type-graphql"

@ObjectType()
export class Wallet{
    
    @Field()
    id:number

    @Field()
    ownerId:string

    @Field(() => Float)
    balance:number
}


import {Field,ObjectType,Float} from "type-graphql"

@ObjectType()
export class walletTransaction{
    
    @Field()
    payerId:number

    @Field()
    payee:string

    @Field(() => Float)
    value:number
}


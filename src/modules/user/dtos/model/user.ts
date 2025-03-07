import { Field, ObjectType } from "type-graphql";

@ObjectType({description: "The user model"})
export class User {
    @Field()
    id: string;

    @Field()
    fullName: string;

    @Field()
    email: string;

    @Field()
    document: string;

    @Field()
    createdAt: Date;

}
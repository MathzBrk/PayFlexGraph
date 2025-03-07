import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutWalletsInput } from "../inputs/UserCreateWithoutWalletsInput";
import { UserUpdateWithoutWalletsInput } from "../inputs/UserUpdateWithoutWalletsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutWalletsInput", {})
export class UserUpsertWithoutWalletsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutWalletsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutWalletsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutWalletsInput, {
    nullable: false
  })
  create!: UserCreateWithoutWalletsInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}

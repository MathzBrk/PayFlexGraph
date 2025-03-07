import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutWalletsInput } from "../inputs/UserUpdateWithoutWalletsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutWalletsInput", {})
export class UserUpdateToOneWithWhereWithoutWalletsInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutWalletsInput, {
    nullable: false
  })
  data!: UserUpdateWithoutWalletsInput;
}

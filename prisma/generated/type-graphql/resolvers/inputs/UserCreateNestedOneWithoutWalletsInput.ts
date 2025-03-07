import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutWalletsInput } from "../inputs/UserCreateOrConnectWithoutWalletsInput";
import { UserCreateWithoutWalletsInput } from "../inputs/UserCreateWithoutWalletsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutWalletsInput", {})
export class UserCreateNestedOneWithoutWalletsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutWalletsInput, {
    nullable: true
  })
  create?: UserCreateWithoutWalletsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutWalletsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutWalletsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}

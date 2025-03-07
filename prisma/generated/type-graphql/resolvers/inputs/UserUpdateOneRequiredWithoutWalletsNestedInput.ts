import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutWalletsInput } from "../inputs/UserCreateOrConnectWithoutWalletsInput";
import { UserCreateWithoutWalletsInput } from "../inputs/UserCreateWithoutWalletsInput";
import { UserUpdateToOneWithWhereWithoutWalletsInput } from "../inputs/UserUpdateToOneWithWhereWithoutWalletsInput";
import { UserUpsertWithoutWalletsInput } from "../inputs/UserUpsertWithoutWalletsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutWalletsNestedInput", {})
export class UserUpdateOneRequiredWithoutWalletsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutWalletsInput, {
    nullable: true
  })
  create?: UserCreateWithoutWalletsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutWalletsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutWalletsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutWalletsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutWalletsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutWalletsInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutWalletsInput | undefined;
}

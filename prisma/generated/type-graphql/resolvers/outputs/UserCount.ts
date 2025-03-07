import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCountWalletsArgs } from "./args/UserCountWalletsArgs";

@TypeGraphQL.ObjectType("UserCount", {})
export class UserCount {
  Wallets!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "Wallets",
    nullable: false
  })
  getWallets(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountWalletsArgs): number {
    return root.Wallets;
  }
}

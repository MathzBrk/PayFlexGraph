import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletTransactionScalarWhereInput } from "../inputs/WalletTransactionScalarWhereInput";
import { WalletTransactionUpdateManyMutationInput } from "../inputs/WalletTransactionUpdateManyMutationInput";

@TypeGraphQL.InputType("WalletTransactionUpdateManyWithWhereWithoutPayeeInput", {})
export class WalletTransactionUpdateManyWithWhereWithoutPayeeInput {
  @TypeGraphQL.Field(_type => WalletTransactionScalarWhereInput, {
    nullable: false
  })
  where!: WalletTransactionScalarWhereInput;

  @TypeGraphQL.Field(_type => WalletTransactionUpdateManyMutationInput, {
    nullable: false
  })
  data!: WalletTransactionUpdateManyMutationInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletScalarWhereInput } from "../inputs/WalletScalarWhereInput";
import { WalletUpdateManyMutationInput } from "../inputs/WalletUpdateManyMutationInput";

@TypeGraphQL.InputType("WalletUpdateManyWithWhereWithoutOwnerInput", {})
export class WalletUpdateManyWithWhereWithoutOwnerInput {
  @TypeGraphQL.Field(_type => WalletScalarWhereInput, {
    nullable: false
  })
  where!: WalletScalarWhereInput;

  @TypeGraphQL.Field(_type => WalletUpdateManyMutationInput, {
    nullable: false
  })
  data!: WalletUpdateManyMutationInput;
}

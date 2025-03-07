import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletTransactionCreateManyPayerInput } from "../inputs/WalletTransactionCreateManyPayerInput";

@TypeGraphQL.InputType("WalletTransactionCreateManyPayerInputEnvelope", {})
export class WalletTransactionCreateManyPayerInputEnvelope {
  @TypeGraphQL.Field(_type => [WalletTransactionCreateManyPayerInput], {
    nullable: false
  })
  data!: WalletTransactionCreateManyPayerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

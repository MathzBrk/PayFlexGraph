import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletTransactionCreateManyPayeeInput } from "../inputs/WalletTransactionCreateManyPayeeInput";

@TypeGraphQL.InputType("WalletTransactionCreateManyPayeeInputEnvelope", {})
export class WalletTransactionCreateManyPayeeInputEnvelope {
  @TypeGraphQL.Field(_type => [WalletTransactionCreateManyPayeeInput], {
    nullable: false
  })
  data!: WalletTransactionCreateManyPayeeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

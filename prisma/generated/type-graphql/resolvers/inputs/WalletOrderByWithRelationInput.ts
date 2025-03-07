import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { WalletTransactionOrderByRelationAggregateInput } from "../inputs/WalletTransactionOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("WalletOrderByWithRelationInput", {})
export class WalletOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ownerId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  balance?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  owner?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => WalletTransactionOrderByRelationAggregateInput, {
    nullable: true
  })
  transactionsSent?: WalletTransactionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WalletTransactionOrderByRelationAggregateInput, {
    nullable: true
  })
  transactionsReceived?: WalletTransactionOrderByRelationAggregateInput | undefined;
}

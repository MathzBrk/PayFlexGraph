import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletTransactionAvgOrderByAggregateInput } from "../inputs/WalletTransactionAvgOrderByAggregateInput";
import { WalletTransactionCountOrderByAggregateInput } from "../inputs/WalletTransactionCountOrderByAggregateInput";
import { WalletTransactionMaxOrderByAggregateInput } from "../inputs/WalletTransactionMaxOrderByAggregateInput";
import { WalletTransactionMinOrderByAggregateInput } from "../inputs/WalletTransactionMinOrderByAggregateInput";
import { WalletTransactionSumOrderByAggregateInput } from "../inputs/WalletTransactionSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("WalletTransactionOrderByWithAggregationInput", {})
export class WalletTransactionOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  value?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  payeeId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  payerId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => WalletTransactionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: WalletTransactionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WalletTransactionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: WalletTransactionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WalletTransactionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: WalletTransactionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WalletTransactionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: WalletTransactionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WalletTransactionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: WalletTransactionSumOrderByAggregateInput | undefined;
}

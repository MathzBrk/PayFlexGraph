import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletTransactionAvgAggregate } from "../outputs/WalletTransactionAvgAggregate";
import { WalletTransactionCountAggregate } from "../outputs/WalletTransactionCountAggregate";
import { WalletTransactionMaxAggregate } from "../outputs/WalletTransactionMaxAggregate";
import { WalletTransactionMinAggregate } from "../outputs/WalletTransactionMinAggregate";
import { WalletTransactionSumAggregate } from "../outputs/WalletTransactionSumAggregate";

@TypeGraphQL.ObjectType("AggregateWalletTransaction", {})
export class AggregateWalletTransaction {
  @TypeGraphQL.Field(_type => WalletTransactionCountAggregate, {
    nullable: true
  })
  _count!: WalletTransactionCountAggregate | null;

  @TypeGraphQL.Field(_type => WalletTransactionAvgAggregate, {
    nullable: true
  })
  _avg!: WalletTransactionAvgAggregate | null;

  @TypeGraphQL.Field(_type => WalletTransactionSumAggregate, {
    nullable: true
  })
  _sum!: WalletTransactionSumAggregate | null;

  @TypeGraphQL.Field(_type => WalletTransactionMinAggregate, {
    nullable: true
  })
  _min!: WalletTransactionMinAggregate | null;

  @TypeGraphQL.Field(_type => WalletTransactionMaxAggregate, {
    nullable: true
  })
  _max!: WalletTransactionMaxAggregate | null;
}

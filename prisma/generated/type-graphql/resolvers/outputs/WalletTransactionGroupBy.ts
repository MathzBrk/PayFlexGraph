import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletTransactionAvgAggregate } from "../outputs/WalletTransactionAvgAggregate";
import { WalletTransactionCountAggregate } from "../outputs/WalletTransactionCountAggregate";
import { WalletTransactionMaxAggregate } from "../outputs/WalletTransactionMaxAggregate";
import { WalletTransactionMinAggregate } from "../outputs/WalletTransactionMinAggregate";
import { WalletTransactionSumAggregate } from "../outputs/WalletTransactionSumAggregate";

@TypeGraphQL.ObjectType("WalletTransactionGroupBy", {})
export class WalletTransactionGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  value!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  payeeId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  payerId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

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

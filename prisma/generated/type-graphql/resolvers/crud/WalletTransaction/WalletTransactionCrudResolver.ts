import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateWalletTransactionArgs } from "./args/AggregateWalletTransactionArgs";
import { CreateManyWalletTransactionArgs } from "./args/CreateManyWalletTransactionArgs";
import { CreateOneWalletTransactionArgs } from "./args/CreateOneWalletTransactionArgs";
import { DeleteManyWalletTransactionArgs } from "./args/DeleteManyWalletTransactionArgs";
import { DeleteOneWalletTransactionArgs } from "./args/DeleteOneWalletTransactionArgs";
import { FindFirstWalletTransactionArgs } from "./args/FindFirstWalletTransactionArgs";
import { FindFirstWalletTransactionOrThrowArgs } from "./args/FindFirstWalletTransactionOrThrowArgs";
import { FindManyWalletTransactionArgs } from "./args/FindManyWalletTransactionArgs";
import { FindUniqueWalletTransactionArgs } from "./args/FindUniqueWalletTransactionArgs";
import { FindUniqueWalletTransactionOrThrowArgs } from "./args/FindUniqueWalletTransactionOrThrowArgs";
import { GroupByWalletTransactionArgs } from "./args/GroupByWalletTransactionArgs";
import { UpdateManyWalletTransactionArgs } from "./args/UpdateManyWalletTransactionArgs";
import { UpdateOneWalletTransactionArgs } from "./args/UpdateOneWalletTransactionArgs";
import { UpsertOneWalletTransactionArgs } from "./args/UpsertOneWalletTransactionArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { WalletTransaction } from "../../../models/WalletTransaction";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateWalletTransaction } from "../../outputs/AggregateWalletTransaction";
import { WalletTransactionGroupBy } from "../../outputs/WalletTransactionGroupBy";

@TypeGraphQL.Resolver(_of => WalletTransaction)
export class WalletTransactionCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateWalletTransaction, {
    nullable: false
  })
  async aggregateWalletTransaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWalletTransactionArgs): Promise<AggregateWalletTransaction> {
    return getPrismaFromContext(ctx).walletTransaction.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyWalletTransaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyWalletTransactionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).walletTransaction.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => WalletTransaction, {
    nullable: false
  })
  async createOneWalletTransaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneWalletTransactionArgs): Promise<WalletTransaction> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).walletTransaction.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyWalletTransaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyWalletTransactionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).walletTransaction.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => WalletTransaction, {
    nullable: true
  })
  async deleteOneWalletTransaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneWalletTransactionArgs): Promise<WalletTransaction | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).walletTransaction.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => WalletTransaction, {
    nullable: true
  })
  async findFirstWalletTransaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstWalletTransactionArgs): Promise<WalletTransaction | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).walletTransaction.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => WalletTransaction, {
    nullable: true
  })
  async findFirstWalletTransactionOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstWalletTransactionOrThrowArgs): Promise<WalletTransaction | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).walletTransaction.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [WalletTransaction], {
    nullable: false
  })
  async walletTransactions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyWalletTransactionArgs): Promise<WalletTransaction[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).walletTransaction.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => WalletTransaction, {
    nullable: true
  })
  async walletTransaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueWalletTransactionArgs): Promise<WalletTransaction | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).walletTransaction.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => WalletTransaction, {
    nullable: true
  })
  async getWalletTransaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueWalletTransactionOrThrowArgs): Promise<WalletTransaction | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).walletTransaction.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [WalletTransactionGroupBy], {
    nullable: false
  })
  async groupByWalletTransaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByWalletTransactionArgs): Promise<WalletTransactionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).walletTransaction.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyWalletTransaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyWalletTransactionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).walletTransaction.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => WalletTransaction, {
    nullable: true
  })
  async updateOneWalletTransaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneWalletTransactionArgs): Promise<WalletTransaction | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).walletTransaction.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => WalletTransaction, {
    nullable: false
  })
  async upsertOneWalletTransaction(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneWalletTransactionArgs): Promise<WalletTransaction> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).walletTransaction.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

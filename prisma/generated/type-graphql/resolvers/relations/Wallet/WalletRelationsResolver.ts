import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { User } from "../../../models/User";
import { Wallet } from "../../../models/Wallet";
import { WalletTransaction } from "../../../models/WalletTransaction";
import { WalletTransactionsReceivedArgs } from "./args/WalletTransactionsReceivedArgs";
import { WalletTransactionsSentArgs } from "./args/WalletTransactionsSentArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wallet)
export class WalletRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async owner(@TypeGraphQL.Root() wallet: Wallet, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wallet.findUniqueOrThrow({
      where: {
        id: wallet.id,
      },
    }).owner({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [WalletTransaction], {
    nullable: false
  })
  async transactionsSent(@TypeGraphQL.Root() wallet: Wallet, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: WalletTransactionsSentArgs): Promise<WalletTransaction[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wallet.findUniqueOrThrow({
      where: {
        id: wallet.id,
      },
    }).transactionsSent({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [WalletTransaction], {
    nullable: false
  })
  async transactionsReceived(@TypeGraphQL.Root() wallet: Wallet, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: WalletTransactionsReceivedArgs): Promise<WalletTransaction[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wallet.findUniqueOrThrow({
      where: {
        id: wallet.id,
      },
    }).transactionsReceived({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

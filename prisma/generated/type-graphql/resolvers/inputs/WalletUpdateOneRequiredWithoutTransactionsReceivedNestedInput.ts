import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletCreateOrConnectWithoutTransactionsReceivedInput } from "../inputs/WalletCreateOrConnectWithoutTransactionsReceivedInput";
import { WalletCreateWithoutTransactionsReceivedInput } from "../inputs/WalletCreateWithoutTransactionsReceivedInput";
import { WalletUpdateToOneWithWhereWithoutTransactionsReceivedInput } from "../inputs/WalletUpdateToOneWithWhereWithoutTransactionsReceivedInput";
import { WalletUpsertWithoutTransactionsReceivedInput } from "../inputs/WalletUpsertWithoutTransactionsReceivedInput";
import { WalletWhereUniqueInput } from "../inputs/WalletWhereUniqueInput";

@TypeGraphQL.InputType("WalletUpdateOneRequiredWithoutTransactionsReceivedNestedInput", {})
export class WalletUpdateOneRequiredWithoutTransactionsReceivedNestedInput {
  @TypeGraphQL.Field(_type => WalletCreateWithoutTransactionsReceivedInput, {
    nullable: true
  })
  create?: WalletCreateWithoutTransactionsReceivedInput | undefined;

  @TypeGraphQL.Field(_type => WalletCreateOrConnectWithoutTransactionsReceivedInput, {
    nullable: true
  })
  connectOrCreate?: WalletCreateOrConnectWithoutTransactionsReceivedInput | undefined;

  @TypeGraphQL.Field(_type => WalletUpsertWithoutTransactionsReceivedInput, {
    nullable: true
  })
  upsert?: WalletUpsertWithoutTransactionsReceivedInput | undefined;

  @TypeGraphQL.Field(_type => WalletWhereUniqueInput, {
    nullable: true
  })
  connect?: WalletWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => WalletUpdateToOneWithWhereWithoutTransactionsReceivedInput, {
    nullable: true
  })
  update?: WalletUpdateToOneWithWhereWithoutTransactionsReceivedInput | undefined;
}

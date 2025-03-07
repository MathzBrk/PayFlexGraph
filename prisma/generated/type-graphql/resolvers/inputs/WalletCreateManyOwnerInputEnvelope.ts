import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WalletCreateManyOwnerInput } from "../inputs/WalletCreateManyOwnerInput";

@TypeGraphQL.InputType("WalletCreateManyOwnerInputEnvelope", {})
export class WalletCreateManyOwnerInputEnvelope {
  @TypeGraphQL.Field(_type => [WalletCreateManyOwnerInput], {
    nullable: false
  })
  data!: WalletCreateManyOwnerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

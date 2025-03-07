import { DocumentType, UserType } from "@prisma/client";
import {cnpj, cpf} from "cpf-cnpj-validator";

export const determineDocument = (document: string): DocumentType => {
    if (!document) {
        throw new Error("CNPJ/CPF is required to create a user");
    }

    if (cpf.isValid(cpf.strip(document))) {
        return "CPF";
    } else if (cnpj.isValid(cpf.strip(document))) {
        return "CNPJ";
    } else{
        throw new Error("Invalid document");
    }
}

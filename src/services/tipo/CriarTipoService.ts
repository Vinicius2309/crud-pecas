import prismaClient from "../../prisma/index";
import md5 from "md5";
import "dotenv/config";

interface TipoRequest {
  descricao: string;
}

class CriarTipoService {
  async execute({ descricao }: TipoRequest) {
    if (!descricao) {
      throw new Error("Informe o E-mail!");
    }

    const tipo = await prismaClient.tipo.create({
      data: {
        descricao,
      },
      select: {
        id: true,
        descricao: true,
      },
    });

    return tipo;
  }
}


export { CriarTipoService };
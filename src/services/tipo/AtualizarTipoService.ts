import prismaClient from "../../prisma/index";


interface TipoRequest {
  id: number;
  descricao: string;
}

class AtualizarTipoService {
  async execute({ id, descricao }: TipoRequest) {
    if (!descricao) {
      throw new Error("Informe a Descrição");
    }

    const tipo = await prismaClient.tipo.update({
      where: { id },
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

export { AtualizarTipoService };

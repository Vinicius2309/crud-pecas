import prismaClient from "../../prisma/index";

interface TipoRequest {
  id: number;
}

class DeletarTipoService {
  async execute({ id }: TipoRequest) {
    const tipo = await prismaClient.tipo.delete({
      where: { id },

      select: {
        id: true,

        descricao: true,
      },
    });

    return tipo;
  }
}

export { DeletarTipoService };

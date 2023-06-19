import prismaClient from "../../prisma";

class ExibirTipoService {
  async execute(id: number) {
    const tipo = await prismaClient.tipo.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        descricao: true
      },
    });
    console.log(tipo)
    return tipo;
  }
}

export { ExibirTipoService };

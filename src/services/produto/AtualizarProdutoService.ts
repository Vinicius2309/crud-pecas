import prismaClient from "../../prisma/index";

interface ProdutoRequest {
  id: number;
  descricao: string;
  preco: number;
  tipoId: number;
}

class AtualizarProdutoService {
  async execute({ id, descricao, preco, tipoId }: ProdutoRequest) {
    if (!descricao) {
      throw new Error("Informe a Descrição");
    }

    const produto = await prismaClient.produto.update({
      where: { id },
      data: {
        descricao,
        preco,
        tipoId,
      },
      select: {
        id: true,
        descricao: true,
        preco: true,
        tipoId: true,
        usuarioId: true,
      },
    });

    return produto;
  }
}

export { AtualizarProdutoService };

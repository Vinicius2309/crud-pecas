import prismaClient from "../../prisma/index";
import md5 from "md5";

interface ProdutoRequest {
  id: number;
}

class DeletarProdutoService {
  async execute({ id }: ProdutoRequest) {
    const produto = await prismaClient.produto.delete({
      where: { id },

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

export { DeletarProdutoService };

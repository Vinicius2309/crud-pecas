import prismaClient from "../../prisma";

class BuscarProdutosService {
  async execute() {
    const produtos = await prismaClient.produto.findMany({
      select: {
        id: true,
        descricao: true,
        preco: true,
        tipo: true,
        usuario: true,
      },
    });
    return produtos;
  }
}

export { BuscarProdutosService };

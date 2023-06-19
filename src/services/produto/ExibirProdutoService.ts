import prismaClient from "../../prisma";

class ExibirProdutoService {
  async execute(id: number) {
    const produto = await prismaClient.produto.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        descricao: true,
        preco: true,
        tipo: true,
        usuario: true,
      },
    });
    console.log(produto)
    return produto;
  }
}

export { ExibirProdutoService };

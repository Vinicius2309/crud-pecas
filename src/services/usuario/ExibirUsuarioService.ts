import prismaClient from "../../prisma";

class ExibirUsuarioService {
  async execute(id: number) {
    const usuario = await prismaClient.usuario.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        nome: true,
        email: true,
      },
    });

    return usuario;
  }
}

export { ExibirUsuarioService };

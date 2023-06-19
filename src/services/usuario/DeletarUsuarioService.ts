import prismaClient from "../../prisma/index";
import md5 from "md5";

interface UsuarioRequest {
  id: number;
}

class DeletarUsuarioService {
  async execute({ id }: UsuarioRequest) {
    const usuario = await prismaClient.usuario.delete({
      where: { id },

      select: {
        id: true,
        nome: true,
        email: true,
        idade: true,
        senha: true,
      },
    });

    return usuario;
  }
}

export { DeletarUsuarioService };

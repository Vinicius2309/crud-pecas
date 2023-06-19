
import prismaClient from "../../prisma/index";
import md5 from "md5";

interface UsuarioRequest {
    id: number;
    nome: string;
    email: string;
    senha: string;
    idade: number;
}

class AtualizarUsuarioService {

    async execute({ id, nome, senha, email, idade }: UsuarioRequest) {

        if (!email) {
            throw new Error("Informe o E-mail!");
        }

        const usuario = await prismaClient.usuario.update({
            where: { id },
            data: {
                nome,
                email,
                idade,
                senha: md5(senha + process.env.MD5HASH)
            },
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

export { AtualizarUsuarioService }
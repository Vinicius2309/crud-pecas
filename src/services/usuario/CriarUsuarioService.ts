import prismaClient from "../../prisma/index";
import md5 from "md5";
import 'dotenv/config';


interface UsuarioRequest {
    nome: string;
    email: string;
    senha: string;
    idade: number;
}

class CriarUsuarioService {

    async execute({ nome, senha, email, idade }: UsuarioRequest) {

        if (!email) {
            throw new Error("Informe o E-mail!");
        }

        if(!senha) {
            throw new Error("Informe a senha!");
        }

        const usuario = await prismaClient.usuario.create({
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
                idade: true
            },
        });

        return usuario;
    }
}

export { CriarUsuarioService };
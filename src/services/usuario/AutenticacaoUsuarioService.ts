import prismaClient from "../../prisma";
import { sign } from "jsonwebtoken";
import md5 from "md5";

interface AutenticacaoRequest {
    email: string;
    senha: string;
}

class AutenticacaoUsuarioService {

    async execute({ email, senha }: AutenticacaoRequest) {

        const usuario = await prismaClient.usuario.findFirst({
            where: {
                email: email,
                senha: md5(senha + process.env.MD5HASH)
            }
        })

        if (!usuario) {
            throw new Error('Email ou Senha está incorreta');
        }

        const token = sign(
            {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email,

            },
            process.env.JWTSECRETHASH,
            {
                expiresIn: 3600, //1 hora
            }
        );

        return {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            token: token
        };
    }
}

export { AutenticacaoUsuarioService }
import { Request, response, Response } from "express";
import { CriarUsuarioService } from "../../services/usuario/CriarUsuarioService";

class CriarUsuarioController {
    // handle retem as informações da requisição
    async handle(req: Request, res: Response) {
        const { nome, senha, email, idade } = req.body;
        const criarUsuarioService = new CriarUsuarioService();
        const usuario = await criarUsuarioService.execute({ nome, senha, email, idade });

        return res.json(usuario);
    }
}

export { CriarUsuarioController };
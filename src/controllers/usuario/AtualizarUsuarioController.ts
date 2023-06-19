import { Request, response, Response } from "express";
import { AtualizarUsuarioService } from "../../services/usuario/AtualizarUsuarioService";

class AtualizarUsuarioController {
    async handle(req: Request, res: Response) {
        const id = Number(req.params.id);
        const { nome, senha, email, idade } = req.body;
        const atualizarUsuarioService = new AtualizarUsuarioService();
        const usuario = await atualizarUsuarioService.execute({ id, nome, senha, email, idade });

        return res.json(usuario);
    }
}

export { AtualizarUsuarioController };
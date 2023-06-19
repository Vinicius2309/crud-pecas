import { Request, Response } from "express";
import { AtualizarTipoService } from "../../services/tipo/AtualizarTipoService";

class AtualizarTipoController {
    async handle(req: Request, res: Response) {
        const id = Number(req.params.id);
        const { descricao } = req.body;
        const atualizarTipoService = new AtualizarTipoService();
        const usuario = await atualizarTipoService.execute({ id, descricao });

        return res.json(usuario);
    }
}

export { AtualizarTipoController };
import { Request, Response } from "express";
import { CriarTipoService } from "../../services/tipo/CriarTipoService";

class CriarTipoController {
    // handle retem as informações da requisição
    async handle(req: Request, res: Response) {
        const { descricao } = req.body;
        const criarTipoService = new CriarTipoService();
        const tipo = await criarTipoService.execute({ descricao });

        return res.json(tipo);
    }
}

export { CriarTipoController };
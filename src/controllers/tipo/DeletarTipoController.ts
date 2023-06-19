import { Request, Response } from "express";
import { DeletarTipoService } from "../../services/tipo/DeletarTipoService";

class DeletarTipoController {
  async handle(req: Request, res: Response) {
    const id = Number(req.params.id);
    const deletarTipoService = new DeletarTipoService();
    const tipo = await deletarTipoService.execute({id});

    return res.json(tipo);
  }
}  

export { DeletarTipoController };

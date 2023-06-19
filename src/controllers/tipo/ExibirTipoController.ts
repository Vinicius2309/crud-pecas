import { Request, Response } from "express";
import { ExibirTipoService } from "../../services/tipo/ExibirTipoService";

class ExibirTipoController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;
    const exibirTipoService = new ExibirTipoService();
    const tipo = await exibirTipoService.execute(Number(id));

    return res.json(tipo);
  }
}  

export { ExibirTipoController };

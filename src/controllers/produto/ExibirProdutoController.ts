import { Request, Response } from "express";
import { ExibirProdutoService } from "../../services/produto/ExibirProdutoService";

class ExibirProdutoController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;
    const exibirProdutoService = new ExibirProdutoService();
    const tipo = await exibirProdutoService.execute(Number(id));

    return res.json(tipo);
  }
}  

export { ExibirProdutoController };

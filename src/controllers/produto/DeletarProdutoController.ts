import { Request, Response } from "express";
import { DeletarProdutoService } from "../../services/produto/DeletarProdutoService";

class DeletarProdutoController {
  async handle(req: Request, res: Response) {
    const id = Number(req.params.id);
    const deletarProdutoService = new DeletarProdutoService();
    const produto = await deletarProdutoService.execute({id});

    return res.json(produto);
  }
}  

export { DeletarProdutoController };

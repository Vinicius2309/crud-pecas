import { Request, Response } from "express";
import { BuscarProdutosService } from "../../services/produto/BuscarProdutosService";

class BuscarProdutosController {
  async handle(req: Request, res: Response) {
    const buscarProdutosService = new BuscarProdutosService();
    const produtos = await buscarProdutosService.execute();

    return res.json(produtos);
  }
}

export { BuscarProdutosController };

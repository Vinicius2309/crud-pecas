import { Request, Response } from "express";
import { CriarProdutoService } from "../../services/produto/CriarProdutoService";
import { PayLoad } from "../../middlewares/Authenticated";

class CriarProdutoController {
    async handle(req: Request, res: Response) {
        const { descricao, preco, usuarioId, tipoId } = req.body;
        const authorization: string  = req.headers.authorization;
        const criarProdutoService = new CriarProdutoService();
        const produto = await criarProdutoService.execute({ descricao, preco, usuarioId, tipoId, authorization });

        return res.json(produto);
    }
}

export { CriarProdutoController };
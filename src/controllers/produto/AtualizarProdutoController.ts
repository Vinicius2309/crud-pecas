import { Request, Response } from "express";
import { AtualizarProdutoService } from "../../services/produto/AtualizarProdutoService";

class AtualizarProdutoController {
    async handle(req: Request, res: Response) {
        const id = Number(req.params.id);
        const { descricao, preco, tipoId } = req.body;
    
        const atualizarProdutoService = new AtualizarProdutoService();
        const usuario = await atualizarProdutoService.execute({ id, descricao, preco, tipoId });
        return res.json(usuario);
    }
}

export { AtualizarProdutoController };
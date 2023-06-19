import { Request, Response } from "express";
import { DeletarUsuarioService } from "../../services/usuario/DeletarUsuarioService";

class DeletarUsuarioController {
  async handle(req: Request, res: Response) {
    const id = Number(req.params.id);
    const deletarUsuarioService = new DeletarUsuarioService();
    const usuario = await deletarUsuarioService.execute({id});

    return res.json(usuario);
  }
}  

export { DeletarUsuarioController };

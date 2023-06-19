import { Request, Response } from "express";
import { ExibirUsuarioService } from "../../services/usuario/ExibirUsuarioService";

class ExibirUsuarioController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;
    const exibirUsuarioService = new ExibirUsuarioService();
    const user = await exibirUsuarioService.execute(Number(id));

    return res.json(user);
  }
}  

export { ExibirUsuarioController };

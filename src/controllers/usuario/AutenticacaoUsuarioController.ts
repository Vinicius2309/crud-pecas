import { Request, Response } from "express";
import { AutenticacaoUsuarioService } from "../../services/usuario/AutenticacaoUsuarioService";

class AuthenticacaoUsuarioController {
  async handle(req: Request, res: Response) {
    const { email, senha } = req.body;

    const autenticacaoService = new AutenticacaoUsuarioService();

    const auth = await autenticacaoService.execute({
      email,
      senha,
    });
    return res.json(auth);
  }
}

export { AuthenticacaoUsuarioController };

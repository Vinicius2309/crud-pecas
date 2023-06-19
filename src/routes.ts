import { Router } from "express";

import { CriarUsuarioController } from "./controllers/usuario/CriarUsuarioController";
import { ExibirUsuarioController } from "./controllers/usuario/ExibirUsuarioController";
import { Authenticated } from "./middlewares/Authenticated";
import { AuthenticacaoUsuarioController } from "./controllers/usuario/AutenticacaoUsuarioController";
import { AtualizarUsuarioController } from "./controllers/usuario/AtualizarUsuarioController";
import { DeletarUsuarioController } from "./controllers/usuario/DeletarUsuarioController";
import { CriarTipoController } from "./controllers/tipo/CriarTipoController";
import { DeletarTipoController } from "./controllers/tipo/DeletarTipoController";
import { AtualizarTipoController } from "./controllers/tipo/AtualizarTipoController";
import { ExibirTipoController } from "./controllers/tipo/ExibirTipoController";
import { CriarProdutoController } from "./controllers/produto/CriarProdutoController";
import { AtualizarProdutoController } from "./controllers/produto/AtualizarProdutoController";
import { DeletarProdutoController } from "./controllers/produto/DeletarProdutoController";
import { ExibirProdutoController } from "./controllers/produto/ExibirProdutoController";
import { BuscarProdutosController } from "./controllers/produto/BuscarProdutosController";

const router = Router();

router.post("/usuario", new CriarUsuarioController().handle);

router.post("/autenticacao", new AuthenticacaoUsuarioController().handle);

router.put("/usuario/:id", Authenticated, new AtualizarUsuarioController().handle);

router.get("/usuario/:id", Authenticated, new ExibirUsuarioController().handle);

router.delete("/usuario/:id", Authenticated, new DeletarUsuarioController().handle);



router.post("/tipo", new CriarTipoController().handle);

router.delete("/tipo/:id", Authenticated, new DeletarTipoController().handle);

router.put("/tipo/:id", Authenticated, new AtualizarTipoController().handle);

router.get("/tipo/:id", Authenticated, new ExibirTipoController().handle);




router.post("/produto", new CriarProdutoController().handle);

router.put("/produto/:id", Authenticated, new AtualizarProdutoController().handle);

router.delete("/produto/:id", Authenticated, new DeletarProdutoController().handle);

router.get("/produto/:id", Authenticated, new ExibirProdutoController().handle);

router.get("/produto", Authenticated, new BuscarProdutosController().handle);



export { router };
import prismaClient from "../../prisma/index";
import md5 from "md5";
import "dotenv/config";
import { PayLoad, PegarInformacoesJwt } from "../../middlewares/Authenticated";

interface TipoRequest {
  descricao: string;
  preco: number;
  usuarioId: number;
  tipoId: number;
  authorization: string;
}

class CriarProdutoService {
  async execute({ descricao, preco, usuarioId, tipoId, authorization  }: TipoRequest) {

    console.log(PegarInformacoesJwt(authorization))

    const { id } = PegarInformacoesJwt(authorization)

    console.log(id)
    

    const produto = await prismaClient.produto.create({
      data: { descricao, preco, usuarioId:Number(PegarInformacoesJwt(authorization)?.id) , tipoId }, select: {id: true, descricao: true}
    })

    return produto;
  }
}


export { CriarProdutoService };
import { Request, Response, NextFunction } from "express";
import { verify, sign, decode, JwtPayload } from "jsonwebtoken";

export interface PayLoad {
  id: number;
  nome: string;
  email: string;
  iat: number;
  exp: number;
  sub: string;
}

export function Authenticated(req: Request, res: Response, next: NextFunction) {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).end();
  }

  try {
    const { sub } = verify(authorization, process.env.JWTSECRETHASH) as PayLoad;
    req.id = sub;
    console.log(next());
    return next();
  } catch (error) {
    console.log(error);
    return res.status(401).end();
  }
}

export function PegarInformacoesJwt(token: string): any {
  const tokenDescriptografado = decode(token);

  return tokenDescriptografado;
}

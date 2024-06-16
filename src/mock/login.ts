import { LoginFormData, User } from "./types";

export async function LoginMock({ email, password }: LoginFormData): Promise<Response> {
  if (!(password === "desafioblue" && email === "desafioblue@blue.com")) {
    return new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Usuário ou senha inválidos")), 2000)
    );
  }
  return new Promise((resolve) =>
    setTimeout(() => resolve(new Response(JSON.stringify({token:"98237982374jh"}))), 2000)
  );
}
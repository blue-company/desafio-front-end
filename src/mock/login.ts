import { LoginFormData } from "./types";

export async function LoginMock({ email, password }: LoginFormData) {
  if (!(password === "desafioblue" && email === "desafioblue@blue.com")) {
    return new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Usuário ou senha inválidos")), 2000)
    );
  }
  return new Promise((resolve) =>
    setTimeout(() => resolve({ token: "12786gy3t472687213" }), 2000)
  );
}

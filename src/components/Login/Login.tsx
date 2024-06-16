"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginMock } from "@/mock/login";
import { useRouter } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import logoBlue from "../assets/logoBlue.svg";
import Image from "next/image";
import { Lock, Mail } from "lucide-react";
import { signIn } from "next-auth/react";

const formSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z
    .string()
    .min(3, { message: "A senha deve ter pelo menos 3 caracteres" }),
});

export function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();
  const { toast } = useToast();
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const token = await signIn("credentials", {
      email: values.email,
      password: values.password,
      callbackUrl: "/dashboard",
      redirect: false,
    });
    if(token?.status === 401){
      toast({
        variant: "destructive",
        title: "Atenção",
        description: `Usuário ou senha inválidos`,
      });
      return;
    } else{
      router.replace("/dashboard");
    }
  }

  return (
    <Card className="bg-[#FAFBFC] shadow-lg w-full max-w-[500px] m-6">
      <CardHeader className="flex flex-col items-center gap-5">
        <Image src={logoBlue} alt="Logotipo da Blue" />
        <CardTitle className="flex flex-col gap-3">Faça seu Login</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Insira o seu email"
                      {...field}
                      icon={<Mail className="text-[#5D5FEF]" />}
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Insira sua senha"
                      icon={<Lock className="text-[#5D5FEF]" />}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-primary-foreground hover:opacity-90 text-white w-full mt-2"
            >
              Entrar
            </Button>
          </form>
          <Toaster />
        </Form>
      </CardContent>
    </Card>
  );
}

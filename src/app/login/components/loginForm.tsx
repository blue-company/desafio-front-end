import { Logo } from '@/components/icon/logo';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { TextField } from '@/components/ui/textfield';
import { useLogin } from '@/hooks/useLogin';
import { loginParams, loginResponse } from '@/service/auth/types';

interface LoginFormProps {
  login: (data: loginParams) => Promise<loginResponse>;
}

export function LoginForm(props: LoginFormProps) {
  const { form, handleSignIn } = useLogin(props);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-[#0035DA]/60 rounded-2xl px-10 py-5 w-[490px]">
        <div className="flex flex-col gap-4 justify-center items-center pt-4 pb-3">
          <Logo />
          <span className="text-gray-200">Acesse agora nosso dashboard</span>
        </div>
        <Form {...form}>
          <form className="flex flex-col gap-4 text-white" onSubmit={handleSignIn}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormLabel>Usuário:</FormLabel>
                  <FormControl>
                    <TextField.Input
                      className="placeholder:text-white"
                      placeholder="Digite seu usuário."
                      {...field}
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
                <FormItem className="space-y-0">
                  <FormLabel>Senha:</FormLabel>
                  <FormControl>
                    <TextField.Password
                      className="placeholder:text-white"
                      placeholder="Digite sua senha."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center mt-6">
              <Button
                className="text-black bg-white hover:bg-white/80 w-full"
                type="submit"
                loading={form.formState.isSubmitting}>
                Login
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

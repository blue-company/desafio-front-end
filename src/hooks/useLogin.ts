import { useToast } from '@/components/ui/use-toast';
import { authCookieOptions, authToken } from '@/constants/auth';

import { loginParams, loginResponse } from '@/service/auth/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { setCookie } from 'nookies';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const loginSchema = z.object({
  username: z.string().min(1, 'Digite um usuário válido!'),
  password: z.string().min(1, 'Digite uma senha válida!')
});

interface UseLoginProps {
  login: (_data: loginParams) => Promise<loginResponse>;
}

export function useLogin(props: UseLoginProps) {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const route = useRouter();
  const { toast } = useToast();

  const handleSignIn = form.handleSubmit(async (data) => {
    try {
      const res = await props.login(data);

      form.reset();
      setCookie(null, authToken, res.token, authCookieOptions);
      toast({
        variant: 'success',
        title: 'Sucesso',
        description: 'Login feito com sucesso'
      });
      route.push('/');
    } catch {
      toast({
        variant: 'error',
        title: 'Erro ao fazer login',
        description: 'Tente novamente!'
      });
    }
  });

  return {
    form,
    handleSignIn
  };
}

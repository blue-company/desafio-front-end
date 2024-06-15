import { toast } from '@/components/ui/use-toast';
import { authToken } from '@/constants/auth';
import { useRouter } from 'next/navigation';
import { destroyCookie } from 'nookies';

function useLogout() {
  const router = useRouter();

  const logout = () => {
    destroyCookie(null, authToken);
    toast({
      variant: 'success',
      title: 'Sucesso',
      description: 'Você será redirecionado em alguns segundos'
    });
    router.push('/login');
  };

  return logout;
}

export { useLogout };

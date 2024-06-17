import { Metadata } from 'next';
import { LoginFormClient } from './components/loginFormClient';

export const metadata: Metadata = {
  title: 'Login'
};

export default function LoginPage() {
  return <LoginFormClient />;
}

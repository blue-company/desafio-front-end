'use client';
import { authService } from '@/service/auth';
import { LoginForm } from './loginForm';

export function LoginFormClient() {
  return <LoginForm login={authService.login} />;
}

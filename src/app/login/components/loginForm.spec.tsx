import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { beforeAll, describe, expect, it, vi } from 'vitest';
import { LoginForm } from './loginForm';

beforeAll(() => {
  vi.mock('next/navigation');
});

describe('LoginForm', () => {
  it('Login form component', async () => {
    const login = vi.fn(async () => {
      return {
        token: ''
      };
    });

    const { getByPlaceholderText, getByText } = render(<LoginForm login={login} />);

    const usernameInput = getByPlaceholderText('Digite seu usuário.');
    const passwordInput = getByPlaceholderText('Digite sua senha.');
    const loginButton = getByText('Login');

    await userEvent.type(usernameInput, 'ADMIN');
    await userEvent.type(passwordInput, '12345678');

    await userEvent.click(loginButton);

    const toast = getByText('Login feito com sucesso');

    expect(login).toHaveBeenCalledOnce();

    expect(login).toHaveBeenCalledWith({
      username: 'ADMIN',
      password: '12345678'
    });

    expect(toast).toBeVisible();
  });
});

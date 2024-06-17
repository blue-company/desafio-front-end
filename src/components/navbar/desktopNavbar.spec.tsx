import { SelectLanguages } from '@/utils/selectLanguages';
import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { DesktopNavbar } from './desktopNavbar';

describe('DesktopNavbar', () => {
  it('Desktop navbar component', async () => {
    const logout = vi.fn(async () => {});

    const { getByText, getByRole } = render(
      <DesktopNavbar languages={SelectLanguages} logout={logout} />
    );

    const dropdownProfile = getByText('Henrique Braga');

    await userEvent.click(dropdownProfile);

    const exitDropdownItem = getByRole('menuitem', {
      name: 'Sair'
    });

    await userEvent.click(exitDropdownItem);

    const logoutButton = getByRole('button', {
      name: 'Sair da conta'
    });

    expect(logoutButton).toBeVisible();

    await userEvent.click(logoutButton);

    expect(logout).toHaveBeenCalled();
  });
});

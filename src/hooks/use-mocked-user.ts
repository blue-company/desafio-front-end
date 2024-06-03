import { _mock } from 'src/_mock';

// ----------------------------------------------------------------------

export function useMockedUser() {
  const user = {
    id: '8864c717-587d-472a-929a-8e5f298024da-0',
    displayName: 'Paulo Freire',
    email: 'paulo@blue.com.br',
    password: 'paulo123',
    photoURL: _mock.image.avatar(12),
    job: _mock.jobTitle(0),
    role: 'admin',
    isPublic: true,
  };

  return { user };
}

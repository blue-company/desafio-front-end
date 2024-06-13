export type loginParams = {
  username: string;
  password: string;
};

export type loginResponse = {
  token: string;
};

export type checkResponse = {
  id: number;
  name: string;
  username: string;
  iat: number;
  exp: number;
  aud: string;
  iss: string;
  sub: string;
};

export type checkParams = {
  token: string;
};

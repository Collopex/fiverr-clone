export type Error = {
  status?: number;
  message?: string;
};

export type TokenPayload = {
  id: string;
  isSeller: boolean;
  iat: number;
};

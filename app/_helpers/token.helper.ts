export const tokenKeys = {
  VERIFICATION_TOKEN: 'verification-token',
};

export const setVerificationToken = (token: string) => {
  localStorage.setItem(tokenKeys.VERIFICATION_TOKEN, token);
};

export const getVerificationToken = () => {
  const token = localStorage.getItem(tokenKeys.VERIFICATION_TOKEN);
  return token;
};

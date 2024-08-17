export const generateRandomCharacter = (length: number) => {
  const chars = 'abcdefghijklmopqrstuvwxyz0123456789!@#$%^&*';
  const len = chars.length;

  const code = [...Array(length)].reduce((codeAcc: string) => {
    const index = Math.floor(Math.random() * len);
    codeAcc += chars.charAt(index);
    return codeAcc;
  }, '');

  return code;
};

export const isValidDate = (date: Date | string) => {
  const tempDate = new Date(date);
  return !isNaN(tempDate.getTime());
};

export const isEmptyObject = (obj: Record<string, any>) => {
  return Object.keys(obj).length === 0;
};

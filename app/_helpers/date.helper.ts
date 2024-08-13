export const getRemainingTime = (time: number | undefined) => {
  if (!time) return 0;
  const now = new Date().getTime() / 1000;
  return time > now ? Math.floor(time - now) : 0;
};

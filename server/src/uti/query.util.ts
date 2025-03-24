export const parseQueryInt = (param: string | undefined): number | undefined => {
  if (!param) return;
  const parsed = parseInt(param);
  return parsed || undefined;
};

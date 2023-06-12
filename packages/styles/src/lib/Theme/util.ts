export const addTransparency = (
  color?: string,
  alpha: number = 0.5
): string => {
  const maxAlpha = 255;
  const alphaHex = Math.ceil(maxAlpha * alpha).toString(16);

  return `${color}${alphaHex}`;
};

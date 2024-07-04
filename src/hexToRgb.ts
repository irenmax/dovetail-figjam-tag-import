export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  if (hex.startsWith("#")) {
    hex = hex.slice(1);
  }

  if (hex.length !== 6) {
    return { r: 0, g: 0, b: 0 };
  }

  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    return { r: 0, g: 0, b: 0 };
  }

  return { r, g, b };
}

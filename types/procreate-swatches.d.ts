import type { Buffer } from "node:buffer";

type ColorSpace = "rgb" | "hsl" | "hsv" | "hwb" | "xyz" | "lab" | "lch";
type Colors = [number[], ColorSpace][];

export function readSwatchesFile(
  data: string | Uint8Array | ArrayBuffer | Blob,
  colorSpace?: ColorSpace,
): Promise<{
  name: string;
  colors: Colors;
}>;

type SwatchReturnType = {
  text: string;
  base64: string;
  binarystring: string;
  array: number[];
  uint8array: Uint8Array;
  arraybuffer: ArrayBuffer;
  blob: Blob;
  nodebuffer: Buffer;
};

export function createSwatchesFile<
  F extends keyof SwatchReturnType | undefined = undefined,
>(
  name: string,
  colors: Colors,
  format?: F,
): Promise<F extends keyof SwatchReturnType ? SwatchReturnType[F] : Uint8Array>;

interface ProcreateSwatchesError extends Error {
  name: "ProcreateSwatchesError";
  message: string;
}

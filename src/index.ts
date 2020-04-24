import { default as uuidv4 } from 'uuid/v4';

export const Uuid = {
  generate: uuidv4,

  stringToBinary(uuidString: string): Buffer {
    const hex = uuidString.replace(/-/g, '');
    const buffer = Buffer.from(hex, 'hex');
    if (buffer.length !== 16) throw new Error('Invalid UUID');
    return buffer;
  },

  binaryToString(uuidBuffer: Buffer): string {
    if (uuidBuffer.length !== 16) throw new Error('Invalid UUID');
    const hex = uuidBuffer.toString('hex');
    return [
      hex.slice(0, 8),
      hex.slice(8, 12),
      hex.slice(12, 16),
      hex.slice(16, 20),
      hex.slice(20, 32),
    ].join('-');
  },
};

import { v4 as uuidv4 } from 'uuid';
import { Uuid } from '../index';

describe('Index unit tests', () => {
  describe('#generate', () => {
    it('should return an Uuid', () => {
      const response = Uuid.generate();
      expect(response).toBeDefined();
    });
  });

  describe('#stringToBinary', () => {
    it('should receive an uuid and return a binary', () => {
      const uuid = uuidv4();
      const response = Uuid.stringToBinary(uuid);
      expect(response).toBeDefined();
      expect(response).toBeInstanceOf(Buffer);
    });
  });

  describe('#binaryToString', () => {
    it('should receive a binary and return an uuid', () => {
      const binary = Uuid.stringToBinary(uuidv4());
      const response = Uuid.binaryToString(binary);
      expect(response).toBeDefined();
      expect(typeof response).toBe('string');
    });
  });
});

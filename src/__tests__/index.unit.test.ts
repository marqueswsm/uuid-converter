import { Uuid } from '../index';

describe('Index unit tests', () => {
  describe('#generate', () => {
    it('should return an Uuid', () => {
      const response = Uuid.generate();
      expect(response).toBeDefined();
    });
  });
});

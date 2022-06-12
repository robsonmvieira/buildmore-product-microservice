import { UniqueID } from "../../../src/core/value-objects/ID.vo";

describe('Unique Id Value Object Unique Tests', () => {
   it('should create a valid unique id', () => {
     const id = new UniqueID();
     expect(typeof id.value).toBe('string')
   });
});
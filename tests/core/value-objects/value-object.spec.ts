import { ValueObject } from "../../../src/core/base-classes/value-object";

class StubValueObject extends ValueObject {}


describe('Value Object Unit Test', () => {
  
  it('should create a valid Value Object', () => {
    let vo = new StubValueObject("valid string");
    expect(vo.value).toBe('valid string')

    vo = new StubValueObject({key: "valid string"});

    expect(vo.value).toStrictEqual({key:'valid string'})

  });

});
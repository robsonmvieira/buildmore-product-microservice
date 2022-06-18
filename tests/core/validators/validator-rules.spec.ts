import { ValidationException } from '../../../src/core/expeptions/validation.expection';
import { ValidatorRules } from '../../../src/core/validators/validator-rules'


const errorMessage = (value: any) => `The ${value} must be a boolean`

describe('Validator Rules Unit Tests', () => {
  it('should return Validator Rule instance', () => {
    const vr = ValidatorRules.values('5', 'name')
    expect(vr).toBeInstanceOf(ValidatorRules)
  });

  it('should throw ValidationException when invalid value is passed', () => {
    const message = 'The field is required'
    let arrange = [
      {value:'', property: 'field', message},
      {value: null, property: 'field', message},
      {value: undefined, property: 'field', message}
    ]
    arrange.forEach(arr => {
      expect(() => ValidatorRules.values(arr.value, arr.property).required()).toThrow(new ValidationException(arr.message))
    })
  });

  it('should throw ValidationException when invalid value is passed to boolean method', () => {
    let arrange = [
      {value:'any value', property: 'field'},
      {value: null, property: 'field'},
      {value: undefined, property: 'field'},
      {value: 'true', property: 'field'},
      {value: 'false', property: 'field'}
    ]
    arrange.forEach(arr => {
      expect(() => ValidatorRules.values(arr.value, arr.property).boolean()).toThrow(new ValidationException(errorMessage(arr.value)))
    })
  })

  it('should throw ValidationException when validation chain failed', () => {
    expect(() => 
      ValidatorRules.values(null, 'field')
        .required()
        .string())
        .toThrow(
          new ValidationException(`The field is required`)
        )

    expect(() => 
    ValidatorRules.values(5, 'field')
      .required()
      .string())
      .toThrow(
        new ValidationException(`The field must be a string`)
      )
      
    expect(() => 
    ValidatorRules.values('5', 'field')
      .required()
      .number())
      .toThrow(
        new ValidationException(`The value must be a number`)
      )

    expect(() => 
    ValidatorRules.values('yan', 'field')
      .required()
      .string()
      .maxLength(2))
      .toThrow(
        new ValidationException(`The field length must be less than 2 characters`)
      )
        
    expect(() => 
    ValidatorRules.values('yan', 'field')
      .required()
      .string()
      .minLength(5))
      .toThrow(
        new ValidationException(`The field length must be greater than 5 characters`)
      )
  });
});
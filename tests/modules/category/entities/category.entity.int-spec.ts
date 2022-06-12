import { ValidationException } from '../../../../src/core/expeptions/validation.expection';
// import { UniqueID } from '../../../../src/core/value-objects/ID.vo';
import { Category } from '../../../../src/modules/category/entities/category.entity';
describe('Category Integration Tests', () => {
  it('should throw error if is invalid properties is passed when try create category ', () => {
    const name = null
    expect(
      () => Category.create({name, description: "Ferros de armação", isActive: true} as any).getResult())
      .toThrowError(new ValidationException(`The name is required`))

    expect(
      () => Category.create({name: "", description: "Ferros de armação", isActive: true} as any).getResult())
      .toThrowError(new ValidationException(`The name is required`))
  });
});
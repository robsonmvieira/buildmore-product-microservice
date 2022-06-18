import { BadRequestException } from '../../../../src/core/expeptions/bad-request.expection';
import { ValidationException } from '../../../../src/core/expeptions/validation.expection';

import { Category } from '../../../../src/modules/category/entities/category.entity';
describe('Category Integration Tests', () => {
  it('should throw error if is invalid properties is passed when try create category ', () => {
    const name = null
    expect(
      () => Category.create({name, description: "Ferros de armação", isActive: true} as any).getResult())
      .toThrowError(new BadRequestException(`Invalid data was provided, please check the errors`))

    expect(
      () => Category.create({name: "", description: "Ferros de armação", isActive: true} as any).getResult())
      .toThrowError(new ValidationException(`Invalid data was provided, please check the errors`))
  });
});
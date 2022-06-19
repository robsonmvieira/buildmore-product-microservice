import { ClassValidator } from "../../../core/validators/class-validator";
import { CategoryProps } from "../entities";

import { IsBoolean, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator"

export class CategoryModelRules {
  @MaxLength(100)
  @IsString()
  @IsNotEmpty()
  name: string
  
  @IsString()
  @IsOptional()
  description: string
  
  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean

  constructor(data: CategoryProps) {
    Object.assign(this, data)
  }
}



export class CategoryValidator extends ClassValidator<CategoryModelRules> {
  validate(data: CategoryProps): boolean {
    return super.validate(new CategoryModelRules(data));
  }
}

export class CategoryValidatorFactory {
  static create(): CategoryValidator {
    return new CategoryValidator();
  }
}


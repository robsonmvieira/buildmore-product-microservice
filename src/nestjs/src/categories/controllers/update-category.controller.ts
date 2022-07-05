import {
  Controller,
  Body,
  Param,
  Inject,
  Put
} from '@nestjs/common'
import { UpdateCategoryUseCase } from 'build-more-cross/dist/modules/category/application/use-cases'
import { UpdateCategoryDto } from '../dto/update-category.dto'

@Controller('categories')
export class UpdateCategoryController {
  
  @Inject(UpdateCategoryUseCase.UseCase)
  private useCase: UpdateCategoryUseCase.UseCase

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto
  ) {
    await this.useCase.execute(updateCategoryDto)
  }
}

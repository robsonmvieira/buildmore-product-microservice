import {
  Controller,
  Post,
  Body,
  Inject} from '@nestjs/common'
import { CreateCategoryUseCase } from 'build-more-cross/dist/modules/category/application/use-cases'
import { CreateCategoryDto } from '../dto/create-category.dto'

@Controller('categories')
export class CreateCategoryController {

  @Inject(CreateCategoryUseCase.UseCase)
  private useCase: CreateCategoryUseCase.UseCase

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    await this.useCase.execute(createCategoryDto)
  }
}

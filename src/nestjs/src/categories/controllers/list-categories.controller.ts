import { Controller, Get, Inject, Query } from '@nestjs/common'
import { ListCategoriesUseCase } from 'build-more-cross/dist/modules/category/application/use-cases'
import { SearchCategoriesDto } from '../dto'

@Controller('categories')
export class ListCategoriesController {
  
  @Inject(ListCategoriesUseCase.UseCase)
  private useCase: ListCategoriesUseCase.UseCase

  @Get()
  async findAll(@Query() searchParams: SearchCategoriesDto) {
    return this.useCase.execute(searchParams)
  }
}

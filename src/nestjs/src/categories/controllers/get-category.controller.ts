import {
  Controller,
  Get,
  Param,
  Inject} from '@nestjs/common'
import { GetCategoryUseCase } from 'build-more-cross/dist/modules/category/application/use-cases'

@Controller('categories')
export class GetCategoryController {
  
  @Inject(GetCategoryUseCase.UseCase)
  private useCase: GetCategoryUseCase.UseCase

  @Get(':id')
  async getByid(
    @Param('id') id: string,
  ) {
   return this.useCase.execute({id})
  }
}

import {
  Controller,
  Param,
  Inject,
  Delete, HttpCode} from '@nestjs/common'
import { DeleteCategoryUseCase } from 'build-more-cross/dist/modules/category/application/use-cases'

@Controller('categories')
export class DeleteCategoryController {
  @Inject()
  private useCase: DeleteCategoryUseCase.UseCase

  @HttpCode(204)
  @Delete(':id')
  async remove(
    @Param('id') id: string,
  ) {
   await this.useCase.execute({id})
  }
}

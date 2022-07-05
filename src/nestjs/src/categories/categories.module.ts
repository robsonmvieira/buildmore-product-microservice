import { Module } from '@nestjs/common'
import {
  CreateCategoryController,
  ListCategoriesController,
  UpdateCategoryController,
  GetCategoryController,
  DeleteCategoryController
} from './controllers'
import CATEGORY_PROVIDERS from './category.providers'
@Module({
  controllers: [ 
    DeleteCategoryController, 
    GetCategoryController, 
    CreateCategoryController, 
    ListCategoriesController, 
    UpdateCategoryController ],
  providers: [
    ...Object.values(CATEGORY_PROVIDERS.MAPPERS),
    ...Object.values(CATEGORY_PROVIDERS.REPOSITORIES),
    ...Object.values(CATEGORY_PROVIDERS.USE_CASES),
  ]
})
export class CategoriesModule {}

/* eslint-disable @typescript-eslint/no-namespace */
import { CategoryInMemoryRepository } from 'build-more-cross/dist/modules/category/infra/repository/category-in-memory.repository'
import {
  CreateCategoryUseCase,
  ListCategoriesUseCase,
  UpdateCategoryUseCase,
  GetCategoryUseCase,
  DeleteCategoryUseCase
} from 'build-more-cross/dist/modules/category/application/use-cases'
import { CategoryMapper } from 'build-more-cross/dist/modules/category/infra/database/category.mapper'

export namespace CATEGORY_PROVIDERS {
  export namespace REPOSITORIES {
    export const CATEGORY_IN_MEMORY_REPOSITORY = {
      provide: 'CategoryRepository',
      useClass: CategoryInMemoryRepository
    }
  }

  export namespace MAPPERS {
    export const CATEGORY_MAPPER = {
      provide: 'CategoryMapper',
      useClass: CategoryMapper
    }
  }

  export namespace USE_CASES {
    export const CREATE_CATEGORY_USE_CASE = {
      provide: CreateCategoryUseCase.UseCase,
      useFactory: (
        categoryRepo: CategoryInMemoryRepository,
        categoryMapper: CategoryMapper
      ) => {
        return new CreateCategoryUseCase.UseCase(categoryRepo, categoryMapper)
      },
      inject: [
        REPOSITORIES.CATEGORY_IN_MEMORY_REPOSITORY.provide,
        MAPPERS.CATEGORY_MAPPER.provide
      ]
    }
    export const LIST_CATEGORIES_USE_CASE = {
      provide: ListCategoriesUseCase.UseCase,
      useFactory: (
        categoryRepo: CategoryInMemoryRepository,
        categoryMapper: CategoryMapper
      ) => {
        return new ListCategoriesUseCase.UseCase(categoryRepo, categoryMapper)
      },
      inject: [
        REPOSITORIES.CATEGORY_IN_MEMORY_REPOSITORY.provide,
        MAPPERS.CATEGORY_MAPPER.provide
      ]
    }
    export const UPDATE_CATEGORY_USE_CASE = {
      provide: UpdateCategoryUseCase.UseCase,
      useFactory: (
        categoryRepo: CategoryInMemoryRepository,
        categoryMapper: CategoryMapper
      ) => {
        return new ListCategoriesUseCase.UseCase(categoryRepo, categoryMapper)
      },
      inject: [
        REPOSITORIES.CATEGORY_IN_MEMORY_REPOSITORY.provide,
        MAPPERS.CATEGORY_MAPPER.provide
      ]
    }
    export const GET_CATEGORY_USE_CASE = {
      provide: GetCategoryUseCase.UseCase,
      useFactory: (
        categoryRepo: CategoryInMemoryRepository,
        categoryMapper: CategoryMapper
      ) => {
        return new GetCategoryUseCase.UseCase(categoryRepo, categoryMapper)
      },
      inject: [
        REPOSITORIES.CATEGORY_IN_MEMORY_REPOSITORY.provide,
        MAPPERS.CATEGORY_MAPPER.provide
      ]
    }
    export const DELETE_CATEGORY_USE_CASE = {
      provide: DeleteCategoryUseCase.UseCase,
      useFactory: (categoryRepo: CategoryInMemoryRepository) => {
        return new DeleteCategoryUseCase.UseCase(categoryRepo)
      },
      inject: ['CategoryRepository']
    }
  }
}

export default CATEGORY_PROVIDERS

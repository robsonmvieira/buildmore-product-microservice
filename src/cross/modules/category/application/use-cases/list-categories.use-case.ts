import { CategoryResponse, GetCategoryDTO } from "../../dtos";
import { CategoryMapper } from "../../infra/database/category.mapper";
import CategoryReposiory  from "../../infra/repository/i-category.repository";
import { UseCase } from '../../../../core/application/use-cases'
import { ListCategoriesInputProps } from "../../dtos";
import { ListPaginationResponse } from "../../../../core/application/dto";


export class ListCategoriesUseCase implements UseCase<ListCategoriesInputProps, ListPaginationResponse<CategoryResponse[]>> {
  constructor(
    private readonly categoryRepository: CategoryReposiory.ICategoryRepository,
    private readonly categoryMapper: CategoryMapper
  ) {}

  async execute(input: ListCategoriesInputProps): Promise<ListPaginationResponse<CategoryResponse[]>>{
    const searchParams = new CategoryReposiory.SearchParams(input)
    const searchresult = await this.categoryRepository.search(searchParams);
    return {
      ...searchresult,
      items: searchresult.items.map(item => this.categoryMapper.fromOrmToOutput(item))
    }
  }


}




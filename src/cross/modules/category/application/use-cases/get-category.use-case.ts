import { CategoryResponse, GetCategoryDTO } from "../../dtos";
import { CategoryMapper } from "../../infra/database/category.mapper";
import CategoryRepository  from "../../infra/repository/i-category.repository";
import { UseCase } from '../../../../core/application/use-cases'

export class GetCategoryUseCase implements UseCase<GetCategoryDTO, CategoryResponse> {
  constructor(
    private readonly categoryRepository: CategoryRepository.ICategoryRepository,
    private readonly categoryMapper: CategoryMapper
  ) {}

  async execute(input: GetCategoryDTO): Promise<CategoryResponse>{

    const category = await this.categoryRepository.findById(input.id);
    const output = this.categoryMapper.fromOrmToOutput(category);
    return output;
  }
}




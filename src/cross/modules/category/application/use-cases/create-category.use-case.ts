import { CategoryResponse, CreateCategoryDTO } from "../../dtos";
import { Category } from "../../entities";
import { CategoryMapper } from "../../infra/database/category.mapper";
import CategoryReposiory  from "../../infra/repository/i-category.repository";
import { UseCase } from '#core/application/use-cases'

export class CreateCategoryUseCase implements UseCase<CreateCategoryDTO, CategoryResponse> {
  constructor(
    private readonly categoryRepository: CategoryReposiory.ICategoryRepository,
    private readonly categoryMapper: CategoryMapper
  ) {}

  async execute(props: CreateCategoryDTO): Promise<CategoryResponse>{

    const category =  Category.create(props).getResult();
    await this.categoryRepository.create(category);
    const output = this.categoryMapper.fromOrmToOutput(category);
    return output;
  }
}




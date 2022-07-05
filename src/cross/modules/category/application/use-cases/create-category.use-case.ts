import { CategoryResponse, CreateCategoryDTO } from "../../dtos";
import { Category } from "../../entities";
import { CategoryMapper } from "../../infra/database/category.mapper";
import CategoryRepository  from "../../infra/repository/i-category.repository";
import  { UseCase as DefaultUseCase}  from '../../../../core/application/use-cases/i-use-case'


export namespace CreateCategoryUseCase {
  export class UseCase implements DefaultUseCase<CreateCategoryDTO, CategoryResponse> {
    constructor(
      private readonly categoryRepository: CategoryRepository.ICategoryRepository,
      private readonly categoryMapper: CategoryMapper
    ) {}
  
    async execute(props: CreateCategoryDTO): Promise<CategoryResponse>{
  
      const category =  Category.create(props).getResult();
      await this.categoryRepository.create(category);
      const output = this.categoryMapper.fromOrmToOutput(category);
      return output;
    }
  }

}

export default CreateCategoryUseCase;


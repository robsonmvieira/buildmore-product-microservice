import { InMemorySearchableRepository } from "../../../../core/repository/in-memory.repository";
import { CategoryProps, Category } from "../../entities";
import  CategoryRepository  from "./i-category.repository";

export class CategoryInMemoryRepository 
  extends InMemorySearchableRepository<CategoryProps, Category, any>
  implements CategoryRepository.ICategoryRepository {

  protected async applyFilter(data: Category[], filter: string): Promise<Category[]> {
     if (!filter) return data;
    return data.filter(item => item.props.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
  }
  async  findByName(name: string): Promise<Category> {
    throw new Error("Method not implemented.");
  }

}
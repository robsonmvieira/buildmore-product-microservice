import { InMemoryRepository } from "../../../core/repository/in-memory.repository";
import { CategoryProps, Category } from "../entities";
import { ICategoryRepository } from "./i-category.repository";

export class CategoryInMemoryRepository extends InMemoryRepository<CategoryProps, Category> implements ICategoryRepository {
  async  findByName(name: string): Promise<Category> {
    throw new Error("Method not implemented.");
    
  }

}
import { Category } from "../entities";


export interface ICategoryRepository {
  findByName(name: string): Promise<Category>;
}
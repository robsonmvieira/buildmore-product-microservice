import { Category, CategoryProps } from "../../modules/category/entities";
import { Entity } from "../base-classes/entity.base";

export interface Repository<Props, T extends Entity<Props>> {
  create(data: T): Promise<void>;
  update(data: T): Promise<void>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<T>;
  findAll(): Promise<T[]>;
}


// class CategoryRepository implements Repository<CategoryProps, Category> {
//   delete(id: string): Promise<void> {
//     throw new Error("Method not implemented.");
//   }
//   findById(id: string): Promise<Category> {
//     throw new Error("Method not implemented.");
//   }
//   findAll(): Promise<Category[]> {
//     throw new Error("Method not implemented.");
//   }
//   async create(data: Category): Promise<void> {
//     // TODO
//   }

//   async update(data: Category): Promise<void> {
//     // TODO
//   }
// }
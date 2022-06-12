import { Entity } from "../base-classes/entity.base";

export interface IRepository<Props, T extends Entity<Props>> {
  create(data: T): Promise<void>;
  update(data: T): Promise<void>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<T>;
  findAll(): Promise<T[]>;
}

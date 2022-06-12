import { Entity } from "../base-classes/entity.base";
import { NotFoundException } from "../expeptions";
import { IRepository } from "./base.repository";

export abstract class InMemoryRepository<Props, T extends Entity<Props>> implements IRepository<Props, T> {
  data: T[] = [];
  
 async  update(data: T): Promise<void> {
  await this.get(data.id)
  const index = this.data.findIndex(item => item.id === data.id);
  this.data[index] = data;
  }
  async delete(id: string): Promise<void> {
    await this.get(id)
    this.data = this.data.filter(item => item.id !== id);
  }
  async findById(id: string): Promise<T> {
    return this.get(id);
  }
  async findAll(): Promise<T[]> {
    return this.data;
  }

  async create(data: T): Promise<void> {
    this.data.push(data);
  }

  protected async get(id: string): Promise<T> {
    const result = this.data.find(item => item.id === id);

    if (!result) {
      throw new NotFoundException("Entity not found");
    }
    return result
  }
}
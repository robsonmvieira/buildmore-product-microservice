import { InMemoryRepository } from '../../../src/core/repository/in-memory.repository'
import { Category, CategoryProps } from '../../../src/modules/category/entities'

import { faker } from '@faker-js/faker';
import { NotFoundException } from '../../../src/core/expeptions';

class StubRepository extends InMemoryRepository<CategoryProps, Category> {
  // constructor() {
  //   super();
  // }
}

describe('InMemoryRepository Unit Tests', () => {
  let repo: StubRepository;
  beforeEach(() => {
    repo = new StubRepository();
  })
  it('should insert a new entity', async () => {
     const category = Category.create({name: faker.commerce.department(), description: faker.commerce.productDescription(), isActive: true}).getResult();
     await repo.create(category)
     expect(repo.data.length).toBe(1);  
  });

  it('should update an existing entity', async () => {
    const category = Category.create({name: faker.commerce.department(), description: faker.commerce.productDescription(), isActive: true}).getResult();
    await repo.create(category)
    category.deactivate()
    await repo.update(category)
    expect(repo.data[0].is_active).toBe(false);  
  })

  it('should list category', async () => {
      for (const item of Array(10).fill(0)) {
          const category = Category.create({name: faker.commerce.department(), description: faker.commerce.productDescription(), isActive: true}).getResult();
          await repo.create(category)
      }
      const categories = await repo.findAll()
      expect(categories.length).toBe(10);
  })


  it('should throw NotFoundExeception if find categoryById method not returns data', async () => {
    expect(repo.findById('any id')).rejects.toThrow(new NotFoundException('Entity not found'))
  })
  it('should find category by id', async () => {
    for (const item of Array(10).fill(0)) {
        const category = Category.create({name: faker.commerce.department(), description: faker.commerce.productDescription(), isActive: true}).getResult();
        await repo.create(category)
    }
    const categoryParam = repo.data[0]
    const category = await repo.findById(categoryParam.id)
    expect(category.id).toBe(categoryParam.id);
  })
  it('should delete category', async () => {
    for (const item of Array(10).fill(0)) {
      const category = Category.create({name: faker.commerce.department(), description: faker.commerce.productDescription(), isActive: true}).getResult();
      await repo.create(category)
  }
  const categoryParam = repo.data[0]
  const category = await repo.delete(categoryParam.id)
  expect(await repo.findAll()).toHaveLength(9);
  })
})
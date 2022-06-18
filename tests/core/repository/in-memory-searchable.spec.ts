import { faker } from '@faker-js/faker'
import { SearchParams } from '../../../src/core/repository/base.repository'
import { InMemorySearchableRepository } from '../../../src/core/repository/in-memory.repository'
import {Category, CategoryProps} from '../../../src/modules/category/entities'


class InMemorySearchableRepositoryStub extends InMemorySearchableRepository<CategoryProps, Category, SearchParams> {
  searchbableFields: string[] = ['name']


  protected async applyFilter(data: Category[], filter: string | null): Promise<Category[]> {
  
    if (!filter) return data;
    return data.filter(item => item.props.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
  }

}
describe('Searchable Unit Test', () => {
  let repository: InMemorySearchableRepositoryStub;

  beforeEach(() => {
    repository = new InMemorySearchableRepositoryStub();
  })
  describe('ApplyFilter Method', () => {
    it('should returns all items when filter param is null', async () => {
     const items = [
      Category.create({name: 'Videos', description: 'description1', isActive: true}).getResult(),
      Category.create({name: 'Eltro', description: 'description1', isActive: true}).getResult(),
      Category.create({name: 'Bebidas', description: 'description1', isActive: false}).getResult(),
      Category.create({name: 'Suco', description: 'description1', isActive: true}).getResult(),
     ]
     const result = await repository['applyFilter'](items, null)
     const spyOnFilterMethod = jest.spyOn(items, 'filter' as any)
     expect(spyOnFilterMethod).not.toHaveBeenCalled()
     expect(result.length).toBe(4)
    });

    it('should returns all items that match with filter', async () => {
      const items = [
         Category.create({name: 'Videos', description: 'description1', isActive: true}).getResult(),
         Category.create({name: 'Eltro', description: 'description1', isActive: true}).getResult(),
         Category.create({name: 'Bebidas', description: 'description1', isActive: false}).getResult(),
         Category.create({name: 'Suco', description: 'description1', isActive: true}).getResult(),
      ]
      const spyOnFilterMethod = jest.spyOn(items, 'filter' as any)
      const result = await repository['applyFilter'](items, 'Suco')
      expect(result.length).toBe(1)
      expect(spyOnFilterMethod).toHaveBeenCalled()
     });
  });

  describe('ApplySort Method',  () => {
    it('should no ordered if no order is passed', async() => {
      const items = [
        Category.create({name: 'Videos', description: 'description1', isActive: true}).getResult(),
        Category.create({name: 'Eltro', description: 'description1', isActive: true}).getResult(),
        Category.create({name: 'Bebidas', description: 'description1', isActive: false}).getResult(),
        Category.create({name: 'Suco', description: 'description1', isActive: true}).getResult(),
     ]

     const orderedItems = await repository['applySort'](items, null, null)
      expect(orderedItems).toStrictEqual(items)
    });

    it('should ordered if sort is passed', async() => {
      const items = [
        Category.create({name: 'd', description: 'description1', isActive: true}).getResult(),
        Category.create({name: 'b', description: 'description1', isActive: true}).getResult(),
        Category.create({name: 'a', description: 'description1', isActive: false}).getResult(),
        Category.create({name: 'c', description: 'description1', isActive: true}).getResult(),
     ]

     const orderedItems = await repository['applySort'](items, 'name', 'asc')
      expect(orderedItems).toStrictEqual([items[2], items[1], items[3], items[0]])
    });

    it('should ordered desc if order_dir is passed', async() => {
      const items = [
        Category.create({name: 'd', description: 'description1', isActive: true}).getResult(),
        Category.create({name: 'b', description: 'description1', isActive: true}).getResult(),
        Category.create({name: 'a', description: 'description1', isActive: false}).getResult(),
        Category.create({name: 'c', description: 'description1', isActive: true}).getResult(),
     ]

     const orderedItems = await repository['applySort'](items, 'name', 'desc')
      expect(orderedItems).toStrictEqual([items[0], items[3], items[1], items[2]])
    });
  });

  describe('ApplyPaginate Method', () => {
    it('should apply paginate ', async() => {
      const items: Category[] = []
      for (const _ of Array(100).fill(0)) {
        const category = Category.create({name: faker.commerce.department(), description: faker.commerce.productDescription(), isActive: true}).getResult();
        items.push(category)
     }
  
     const paginatedItems = await repository['applyPaginate'](items, 1, 10)
      expect(paginatedItems).toStrictEqual(items.slice(0, 10))
    })

  });

  describe('Search Method', () => {
    
  });

  
});
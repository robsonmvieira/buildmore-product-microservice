import {CategoryInMemoryRepository} from '../../../../../src/modules/category/infra/repository/category-in-memory.repository'
import { CreateCategoryUseCase, ListCategoriesUseCase } from '../../../../../src/modules/category/application/use-cases'
import { CategoryMapper } from '../../../../../src/modules/category/infra/database/category.mapper'
import { GetCategoryDTO } from '@modules/category/dtos';
describe('List Categories UseCase Unit Tests', () => {
  let repo: CategoryInMemoryRepository
  let usecase: ListCategoriesUseCase
  let createUseCase: CreateCategoryUseCase
  let mapper: CategoryMapper

  beforeEach(() => {
    repo = new CategoryInMemoryRepository()
    mapper = new CategoryMapper()
    usecase = new ListCategoriesUseCase(repo, mapper)
    createUseCase = new CreateCategoryUseCase(repo, mapper)

  })
  
  it('should list categories using find method ', async () => {
    jest.spyOn(repo, 'findById')
    const mapperSpyOn = jest.spyOn(mapper, 'fromOrmToOutput')
    const inputCreateDTO = {
      name: 'test',
      isActive: true,
    }
    
    await createUseCase.execute(inputCreateDTO)
    const inputFindById: GetCategoryDTO = {
      id: repo.data[0].id
    }

    const output = await usecase.execute(inputFindById)
    expect(output.name).toBe('test')
    expect(mapperSpyOn).toHaveBeenCalledTimes(2)

  });
 
});
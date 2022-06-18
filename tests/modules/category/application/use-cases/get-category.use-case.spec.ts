import {CategoryInMemoryRepository} from '#modules/category/infra/repository/category-in-memory.repository'
import { CreateCategoryUseCase, GetCategoryUseCase } from '#modules/category/application/use-cases'
import { CategoryMapper } from '#modules/category/infra/database/category.mapper'
import { GetCategoryDTO } from '#modules/category/dtos';
import { NotFoundException } from '#core/expeptions';
describe('Get Category UseCase Unit Tests', () => {
  let repo: CategoryInMemoryRepository
  let usecase: GetCategoryUseCase
  let createUseCase: CreateCategoryUseCase
  let mapper: CategoryMapper

  beforeEach(() => {
    repo = new CategoryInMemoryRepository()
    mapper = new CategoryMapper()
    usecase = new GetCategoryUseCase(repo, mapper)
    createUseCase = new CreateCategoryUseCase(repo, mapper)

  })
  
  it('should returns a category ', async () => {
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


  it('should throw error if category not found ', async () => {
    jest.spyOn(repo, 'findById')
    const inputCreateDTO = {
      name: 'test',
      isActive: true,
    }
    
    await createUseCase.execute(inputCreateDTO)
    const inputFindById: GetCategoryDTO = {
      id: 'invalid-id'
    }
    expect(
      () => usecase.execute(inputFindById)).rejects.toThrow(
        new NotFoundException('Entity not found')
        )

  });
});
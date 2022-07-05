import { CreateCategoryController } from './'

describe('CreateCategoriesController', () => {
  let controller: CreateCategoryController

  beforeEach(async () => {
    controller = new CreateCategoryController()
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  
  it('should create a category', async() => {

    const input = {
      name: 'valid name',
      isActive: true,
      description: 'Some Description'
    }


    const mockReturnValue = {
      id: '0ac56837-7f6a-432c-a838-34f87a0d591f',
      name: 'valid name',
      isActive: true,
      description: 'Some Description',
      created_at: new Date()
    }

    const mockCreateUseCase = {
      execute: jest.fn().mockReturnValue(mockReturnValue)
    }
    //@ts-expect-error
    controller['useCase'] = mockCreateUseCase

    await controller.create(input)
    expect(mockCreateUseCase.execute).toHaveBeenCalled()
  })
})

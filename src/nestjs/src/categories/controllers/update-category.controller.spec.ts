import { UpdateCategoryController } from './update-category.controller'

describe('UpdateCategoriesController', () => {
  let controller: UpdateCategoryController

  beforeEach(async () => {
 

    controller = new UpdateCategoryController()
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  it('should update category', async () => {

    const input = {
      id: '0ac56837-7f6a-432c-a838-34f87a0d591f',
      name: 'valid updated name',
      isActive: true,
      description: 'Some Description'
    }

    const mockReturnValue = {
      id: '0ac56837-7f6a-432c-a838-34f87a0d591f',
      name: 'valid updated name',
      isActive: true,
      description: 'Some Description',
      created_at: new Date()
    }

    const mockUpdatedUseCase = {
      execute: jest.fn().mockReturnValue(mockReturnValue)
    }
    //@ts-expect-error
    controller['useCase'] = mockUpdatedUseCase

    await controller.update(mockReturnValue.id, input)

    expect(mockUpdatedUseCase.execute).toBeCalled()

  });
})

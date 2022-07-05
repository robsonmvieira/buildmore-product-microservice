import { DeleteCategoryController, CreateCategoryController,  } from '.'



describe('DeleteCategoryController', () => {
  let controller: DeleteCategoryController
  let createController: CreateCategoryController

  beforeEach(async () => {
    controller = new DeleteCategoryController()
    createController = new CreateCategoryController()
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  it('should be able delete a category', () => {

    // const mockCreateUseCase = {
    //   execute: jest.fn().mockReturnValue(mockReturnValue)
    // }
    expect(controller).toBeDefined()
  })
})

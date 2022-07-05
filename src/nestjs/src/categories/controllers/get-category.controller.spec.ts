import { GetCategoryController } from './'

describe('GetCategoryController', () => {
  let controller: GetCategoryController

  beforeEach(async () => {
    controller = new GetCategoryController()
  })

  it('should be defined',  () => {
    expect(controller).toBeDefined()
  })

  it('should returns a category when called with correct id', async () => {
    const mockReturnValue = {
      id: '0ac56837-7f6a-432c-a838-34f87a0d591f',
      name: 'valid name',
      isActive: true,
      description: 'Some Description',
      created_at: new Date()
    }

    const mockGetUseCase = {
      execute: jest.fn().mockReturnValue(mockReturnValue)
    }
    //@ts-expect-error
    controller['useCase'] = mockGetUseCase
    const response = await controller.getByid(mockReturnValue.id)
    expect(response.id).toBe(mockReturnValue.id)
    expect(mockGetUseCase.execute).toHaveBeenCalled()

  });
})

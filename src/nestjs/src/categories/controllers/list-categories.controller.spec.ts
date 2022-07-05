import { ListCategoriesController } from '.'

describe('ListCategoriesController', () => {
  let controller: ListCategoriesController

  beforeEach(async () => {
  
    controller = new ListCategoriesController()
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  it('should list categories', async() => {
    const mockReturnValue = [{
      id: '0ac56837-7f6a-432c-a838-34f87a0d591f',
      name: 'valid name',
      isActive: true,
      description: 'Some Description',
      created_at: new Date()
    }]
    const response = {
      items: mockReturnValue,
      page: 1,
      per_page: 15,
      sort: 'name',
      sort_dir: 'asc',
      filter: null
    }

    const input = {
      page: 1,
      per_page: 15,
      sort: 'name',
      sort_dir: null,
      filter: null
    }
 

    const mockListCategoriesUseCase = {
      execute: jest.fn().mockReturnValue(response)
    }
     //@ts-expect-error
     controller['useCase'] = mockListCategoriesUseCase
     const output = await controller.findAll(input)
     expect(mockListCategoriesUseCase.execute).toBeCalled()
     expect(output.items.length).toBe(1)
  });
})

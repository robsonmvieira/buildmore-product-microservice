import { UniqueID } from '../../../../src/core/value-objects/ID.vo';
import { Category } from '../../../../src/modules/category/entities/category.entity';
describe('Category Entity Unit Tests', () => {
  beforeEach(() => {
    Category.validate = jest.fn();
  })
  it('should create new Category Entity', () => {
     const category = Category.create({name: "Ferros", description: "Ferros de armação", isActive: true})
     expect(category.isSuccess).toBe(true)
     expect(Category.validate).toHaveBeenCalledTimes(1)
    
  });

  it('should create new category when id is passed', () => {
  const id = new UniqueID();
    const created_at = new Date()
    const props = {
      name: "Ferros", 
      description: "Ferros de armação", 
      isActive: true, created_at}
    const category = Category.create(props, id)
    expect(category.getResult().id).toBe(id.value);
    expect(Category.validate).toHaveBeenCalledTimes(1)
    
  });

  it('should update name', () => {
    const category = Category.create({name: "Ferros", description: "Ferros de armação", isActive: true})
    category.getResult().updateName("Ferros de armação")
    expect(Category.validate).toHaveBeenCalledTimes(1)
    expect(category.getResult().name).toBe("Ferros de armação")
  })

  it('should activate category', () => {
    const category = Category.create({name: "Ferros", description: "Ferros de armação", isActive: false})
    category.getResult().activate()
    expect(Category.validate).toHaveBeenCalledTimes(1)
    expect(category.getResult().is_active).toBe(true)
  })

  it('should deactivate category', () => {
    const category = Category.create({name: "Ferros", description: "Ferros de armação", isActive: true})
    category.getResult().deactivate()
    expect(Category.validate).toHaveBeenCalledTimes(1)
    expect(category.getResult().is_active).toBe(false)
  })
});
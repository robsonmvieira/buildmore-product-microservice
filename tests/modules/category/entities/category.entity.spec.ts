import { Category } from '../../../../src/modules/category/entities/category.entity';
describe('Category Entity Unit Tests', () => {
  it('should create new Category Entity', () => {
     const category = Category.create({name: "Ferros", description: "Ferros de armação", is_active: true})

     expect(category.name).toBe('Ferros')
     expect(category.description).toBe('Ferros de armação')
     expect(category.is_active).toBe(true)
  });

  it('should return data of Category', () => {
    const created_at = new Date()
    const props = {
      name: "Ferros", 
      description: "Ferros de armação", 
      is_active: true, created_at}
    const category = Category.create(props)
    expect(category.created_at).toBe(created_at)
  });
});
import { CategoryProps } from ".";

export class Category {
  
  private constructor(readonly props: CategoryProps) {
    this.props = props;
  }

  static create(data: CategoryProps): Category {
    const payload: CategoryProps = {
      name: data.name, 
      is_active: data.is_active?? true,
      description: data.description,
      created_at: data.created_at?? new Date(),
      updated_at: data.updated_at ?? new Date()
    }
    return new Category(payload);
  }
  get name(): string {
    return this.props.name;
  }
  get description(): string| undefined {
    return this.props?.description;
  }

  get is_active(): boolean {
    return this.props.is_active;
  }

  get created_at(): Date {
    return this.props.created_at!;
  }
}
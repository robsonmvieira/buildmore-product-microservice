import { UniqueID } from "../../../../core/value-objects/ID.vo";
import { CategoryResponse } from "../../dtos";
import { Category } from "../../entities/category.entity";

export class CategoryMapper {

  fromOrmToEntity(data: CategoryOrm): Category {
    const props = {
      name: data.name,
      description: data.description,
      isActive: data.is_active,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt
    }
    const id = new UniqueID(data.id);
    return Category.create(props, id).getResult();
  }

  fromOrmToOutput(data: Category): CategoryResponse {
    const props = {
      id: data.id,
      name: data.props.name,
      description: data.props.description ?? null,
      is_active: data.props.isActive,
      created_at: data.created_at,
      updatedAt: data.updatedAt
    }
    return props
  }

  // fromEntityToOrm(entity: Category): CategoryOrm {}
}

export type CategoryOrm = {
  id: string;
  name: string;
  description: string | null;
  is_active: boolean;
  createdAt: Date;
  updatedAt: Date;
}
import { Category, CategoryProps } from "../../entities";
import { 
  ISearchableRepository,
  SearchParams as SearchParamsDefault,
  SearchResult as SearchResultDefault } from '../../../../core/repository/base.repository';

export namespace CategoryReposiory {
  export class SearchParams extends SearchParamsDefault{}
  
  export class SearchResult extends SearchResultDefault<CategoryProps, Category>{}
  
  export interface ICategoryRepository extends ISearchableRepository<CategoryProps, Category, SearchParams, SearchResult>{
    findByName(name: string): Promise<Category>;
  }
}

export default CategoryReposiory;

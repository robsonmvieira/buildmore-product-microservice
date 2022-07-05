export class SearchCategoriesDto {
  page: number
  per_page: number
  sort: string
  sort_dir: SortDirection
  filter: string | null
}

export type SortDirection = 'asc'| 'desc'


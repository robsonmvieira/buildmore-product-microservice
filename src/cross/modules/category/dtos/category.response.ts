export type CategoryResponse = {
  id: string
  name: string;
  is_active: boolean;
  description: string | null;
  created_at: Date;
  updatedAt: Date;
}
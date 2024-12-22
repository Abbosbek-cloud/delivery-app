export interface ICategory {
  id: number;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICategoryView
  extends Omit<ICategory, "createdAt" | "updatedAt"> {}

export interface ICategoryRequest extends ICategoryView {}

export interface ICategoryResponse extends ICategoryView {}

export interface IngredientProps {
  _id: string;
  name: string;
  unit: 'kg' | 'g' | 'l' | 'ml' | 'unit';
  cost: number;
}

export interface MovementsProps {
  navigation: any;
  filterActive: string;
  movements?: Array<{
    id: string;
    image: string;
    points: number;
    product: string;
    createdAt: string;
    is_redemption: boolean;
  }>;
  totalPoints?: number;
  handleFilter: (value: string) => void;
}

export type ProductsType = {
  id: string;
  image: string;
  points: number;
  product: string;
  createdAt: string;
  is_redemption: boolean;
};

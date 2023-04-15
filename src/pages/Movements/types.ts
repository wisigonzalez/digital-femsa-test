export interface MovementsProps {
  movements?: Array<{
    id: string;
    product: string;
    image: string;
    is_redemption: boolean;
    points: number;
    createdAt: string;
  }>;
  totalPoints?: number;
}

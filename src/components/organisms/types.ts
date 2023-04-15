export interface ListProps {
  navigation: any;
  data?: Array<{
    id: string;
    image: string;
    points: number;
    product: string;
    createdAt: string;
    is_redemption: boolean;
  }>;
}

export interface ItemProps {
  item: {
    id: string;
    image: string;
    points: number;
    product: string;
    createdAt: string;
    is_redemption: boolean;
  };
}

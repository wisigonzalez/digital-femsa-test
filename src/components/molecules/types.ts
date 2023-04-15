export interface ListItemProps {
  item: {
    id: string;
    image: string;
    points: number;
    product: string;
    createdAt: string;
    is_redemption: boolean;
  };
  handleOnPress: () => void;
}

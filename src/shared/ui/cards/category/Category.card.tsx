import { Card, Image, Text } from "@mantine/core";
import classes from "./Category.module.css";

interface CategoryCardProps {
  id: number;
  name: string;
  image: string;
  active: boolean;
  onchangeCategory: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = (props) => {
  const { name, image, active, onchangeCategory } = props;
  return (
    <Card
      className={classes.category__card}
      withBorder={active}
      onClick={onchangeCategory}
    >
      <Image className={classes.category__card__image} src={image} alt={name} />
      <Text className={classes.category__card__text}>{name}</Text>
    </Card>
  );
};

export default CategoryCard;

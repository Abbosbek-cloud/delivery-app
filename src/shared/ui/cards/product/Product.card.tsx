import { Button, Card, Image, Stack, Text } from "@mantine/core";
import { IProduct } from "../../../interfaces/product.interface";
import { IconPlus } from "@tabler/icons-react";
import classes from "./Product.module.css";

interface ProductCardProps {
  product: IProduct;
  handleOpenDrawer: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  handleOpenDrawer,
}) => {
  return (
    <Card
      radius="13px"
      padding="15px 12px 15px 127px"
      pos="relative"
      h="120px"
      style={{
        background:
          "linear-gradient(90deg, #FFF1E8 5.37%, rgba(255, 255, 255, 0) 97.38%)",
      }}
    >
      <Image
        src={product.image}
        alt={product.name}
        className={classes.card__image}
      />
      <Stack className={classes.card__body}>
        <Text className={classes.card__body__name}>{product.name}</Text>
        <Text className={classes.card__body__description}>
          {product.description}
        </Text>
        <Text className={classes.card__body__price}>{product.price} $</Text>
      </Stack>
      <Button
        className={classes.card__button}
        pos="absolute"
        right={0}
        bottom={0}
        leftSection={<IconPlus />}
        onClick={handleOpenDrawer}
      >
        Add
      </Button>
    </Card>
  );
};

export default ProductCard;

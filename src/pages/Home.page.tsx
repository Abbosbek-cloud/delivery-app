import { Group, ScrollArea, Stack } from "@mantine/core";
import MainComponent from "../shared/ui/layout/Main.component";
import { useSelector } from "react-redux";
import { RootState } from "../shared/store";
import { CategoryCard, ProductCard } from "../shared/ui/cards";
import { useState } from "react";
import ProductDrawer from "../shared/ui/drawers/product/Product.drawer";
import { useSearchParams } from "react-router";

const HomePage = () => {
  const categorySlice = useSelector((state: RootState) => state.category);
  const productSlice = useSelector((state: RootState) => state.product);

  const [searchParams, setSearchParams] = useSearchParams();

  const handleOpenDrawer = (productId: number) => {
    setSearchParams((prev) => {
      prev.set("productId", productId.toString());
      return prev;
    });
  };

  const handleCloseDrawer = () => {
    setSearchParams((prev) => {
      prev.delete("productId");
      return prev;
    });
  };

  const isProductDrawerOpened = searchParams.has("productId");

  const [activeCategory, setActiveCategory] = useState(1);
  return (
    <MainComponent>
      <ScrollArea w="100%" type="scroll" offsetScrollbars scrollbarSize={0}>
        <Group style={{ flexWrap: "nowrap", overflowX: "auto", gap: "12px" }}>
          {categorySlice.categories.map((category) => {
            return (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                image={category.image}
                active={activeCategory === category.id}
                onchangeCategory={() => setActiveCategory(category.id)}
              />
            );
          })}
        </Group>
      </ScrollArea>
      <ScrollArea
        h="calc(100vh - 241.5px - var(--mantine-spacing-md))"
        scrollbarSize={0}
      >
        <Stack gap="12px">
          {productSlice.products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                handleOpenDrawer={() => handleOpenDrawer(product.id)}
              />
            );
          })}
        </Stack>
      </ScrollArea>
      <ProductDrawer
        opened={isProductDrawerOpened}
        onClose={handleCloseDrawer}
      />
    </MainComponent>
  );
};

export default HomePage;

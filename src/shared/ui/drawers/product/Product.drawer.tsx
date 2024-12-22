import {
  Box,
  Button,
  Checkbox,
  DrawerProps,
  Group,
  Radio,
  Stack,
  Text,
} from "@mantine/core";
import DrawerCore from "../core/Drawer.core";
import classes from "./Product.module.css";
import { useSearchParams } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { ProductSection } from "../../components";

interface ProductDrawerProps extends Pick<DrawerProps, "opened" | "onClose"> {}

const ProductDrawer: React.FC<ProductDrawerProps> = (props) => {
  const { opened, onClose } = props;
  const productSlice = useSelector((state: RootState) => state.product);

  const [searchParams] = useSearchParams();

  const product = productSlice.products.find(
    (product) => product.id === Number(searchParams.get("productId"))
  );

  const sizes = [
    {
      id: 1,
      name: "Small - 6”",
      price: 8,
    },
    {
      id: 2,
      name: "Medium - 10”",
      price: 12,
    },
    {
      id: 3,
      name: "Large - 14”",
      price: 12,
    },
  ];

  const crust = [
    {
      id: 1,
      name: "Classic Hand tossed",
      price: 0,
    },
    {
      id: 2,
      name: "Cheese Burst",
      price: 2,
    },
    {
      id: 3,
      name: "Thin Crust",
      price: 5,
    },
  ];

  const addOns = [
    {
      id: 1,
      name: "Add Extra Cheese",
      price: 2,
    },
    {
      id: 2,
      name: "Add Mashroom",
      price: 3,
    },
  ];

  return (
    <DrawerCore
      opened={opened}
      onClose={onClose}
      title={product?.name || ""}
      position="bottom"
      classNames={{
        title: classes.drawer__title,
      }}
      size="600px"
      styles={{
        content: {
          overflow: "hidden",
        },
        body: {
          height: "calc(100% - 117px)",
          overflow: "auto",
          padding: "0 12px 12px 12px",
        },
      }}
    >
      <Stack className={classes.drawer__body}>
        <ProductSection title="Choose Size" type="required">
          <Stack>
            <Radio.Group name="size" withAsterisk>
              <Stack>
                {sizes.map((size) => {
                  return (
                    <Radio
                      value="react"
                      styles={{
                        body: {
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "start",
                          alignItems: "center",
                          gap: "12px",
                        },
                        labelWrapper: {
                          w: "100%",
                          flex: 1,
                          borderBottom: "1px solid #E6E6E6",
                          padding: "8px 0",
                        },
                        label: {
                          "padding-inline-start": 0,
                        },
                      }}
                      label={
                        <Group justify="space-between" w="100%" flex={1}>
                          <Text fz="14px" lh="14px" fw={400}>
                            {size.name}
                          </Text>
                          <Text fz="14px" fw={400}>
                            + ${size.price}
                          </Text>
                        </Group>
                      }
                    />
                  );
                })}
              </Stack>
            </Radio.Group>
          </Stack>
        </ProductSection>
        <ProductSection title="Select Crust" type="required">
          <Stack>
            <Radio.Group name="crust" withAsterisk>
              <Stack>
                {crust.map((crust) => {
                  return (
                    <Radio
                      value="react"
                      styles={{
                        body: {
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "start",
                          alignItems: "center",
                          gap: "12px",
                        },
                        labelWrapper: {
                          w: "100%",
                          flex: 1,
                          borderBottom: "1px solid #E6E6E6",
                          padding: "8px 0",
                        },
                        label: {
                          "padding-inline-start": 0,
                        },
                      }}
                      label={
                        <Group justify="space-between" w="100%" flex={1}>
                          <Text fz="14px" lh="14px" fw={400}>
                            {crust.name}
                          </Text>
                          {crust.price && (
                            <Text fz="14px" fw={400}>
                              + ${crust.price}
                            </Text>
                          )}
                        </Group>
                      }
                    />
                  );
                })}
              </Stack>
            </Radio.Group>
          </Stack>
        </ProductSection>
        <ProductSection title="Add ons" type="optional">
          <Stack>
            <Checkbox.Group defaultValue={["react"]} withAsterisk>
              <Stack>
                {addOns.map((addOn) => {
                  return (
                    <Checkbox
                      value={addOn.id.toString()}
                      styles={{
                        body: {
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "start",
                          alignItems: "center",
                          gap: "12px",
                        },
                        labelWrapper: {
                          w: "100%",
                          flex: 1,
                          borderBottom: "1px solid #E6E6E6",
                          padding: "8px 0",
                        },
                        label: {
                          "padding-inline-start": 0,
                        },
                      }}
                      label={
                        <Group justify="space-between" w="100%" flex={1}>
                          <Text fz="14px" lh="14px" fw={400}>
                            {addOn.name}
                          </Text>
                          {addOn.price && (
                            <Text fz="14px" fw={400}>
                              + ${addOn.price}
                            </Text>
                          )}
                        </Group>
                      }
                    />
                  );
                })}
              </Stack>
            </Checkbox.Group>
          </Stack>
        </ProductSection>
        <ProductSection title="Sizga ma'qul bo'ladi" type="optional">
          <Stack></Stack>
        </ProductSection>
      </Stack>
      <Stack className={classes.drawer__footer}>
        <Group gap="43px">
          <Button className={classes.drawer__footer__button}>
            Add to Cart
          </Button>
          <Box
            style={{
              gap: "6px !important",
            }}
          >
            <Text lh="13px" fz="13px" fw={600}>
              Item Total
            </Text>
            <Text
              fz="20px"
              lh="20px"
              fw={700}
              style={{
                letterSpacing: ".25px",
              }}
            >
              $ 1200
            </Text>
          </Box>
        </Group>
      </Stack>
    </DrawerCore>
  );
};

export default ProductDrawer;

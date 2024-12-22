import { Badge, Group, Stack, Text } from "@mantine/core";

interface IProductSectionProps {
  title: string;
  children: React.ReactNode;
  type: "optional" | "required";
}

const ProductSection: React.FC<IProductSectionProps> = (props) => {
  const { title, type, children } = props;
  const getBadgeData = (type: IProductSectionProps["type"]) => {
    switch (type) {
      case "optional":
        return {
          title: "Optional",
          bgColor: "#E6E6E6",
          textColor: "#121212",
        };
      case "required":
        return {
          title: "Required",
          bgColor: "#FFD9D9",
          textColor: "#D00000",
        };
      default:
        return;
    }
  };
  return (
    <Stack>
      <Group justify="space-between" align="center">
        <Text fz="16px" fw={800} lh="16px" style={{ letterSpacing: "-0.25px" }}>
          {title}
        </Text>
        <Badge color={getBadgeData(type)?.bgColor} p="6px 8px">
          <Text
            fz="10px"
            fw={800}
            lh="10px"
            c={getBadgeData(type)?.textColor}
            style={{
              letterSpacing: "1px",
            }}
          >
            {getBadgeData(type)?.title}
          </Text>
        </Badge>
      </Group>
      {children}
    </Stack>
  );
};

export default ProductSection;

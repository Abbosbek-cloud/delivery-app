import {
  ActionIcon,
  Group,
  Select,
  Stack,
  Text,
  UnstyledButton,
} from "@mantine/core";
import classes from "./Layout.module.css";
import {
  IconCaretDownFilled,
  IconLocation,
  IconMapPinFilled,
  IconMenu4,
} from "@tabler/icons-react";
import { useState } from "react";

const HeaderComponent = () => {
  const [type, setType] = useState("delivery");
  return (
    <Stack
      pos="sticky"
      top={0}
      left={0}
      w="100%"
      gap="16.5px"
      style={{ zIndex: 100 }}
    >
      <Group className={classes.layout__header} justify="space-between">
        <Group gap="12px">
          <UnstyledButton
            w={20}
            h={20}
            className={classes.layout__header__menu}
          >
            <IconMenu4 color="#121212" />
          </UnstyledButton>
          <Text c="#121212" fw={800} size="lg">
            Awesome pizza
          </Text>
        </Group>
        <Group>
          <Select
            w={100}
            placeholder="Select type"
            c="#e86a12"
            data={[
              { value: "delivery", label: "Delivery" },
              { value: "pickup", label: "Pickup" },
            ]}
            rightSection={<IconCaretDownFilled color="#e86a12" size="20px" />}
            value={type}
            onChange={(value) => setType(value ?? "delivery")}
            size="xs"
            miw={0}
            styles={{
              input: {
                border: "none",
                color: "#e86a12",
                fontSize: "13px",
                lineHeight: "13px",
                letterSpacing: ".75px",
                fontWeight: 800,
              },
            }}
          />
        </Group>
      </Group>
      <Group
        justify="space-between"
        p="9px"
        bg="#FFF1E7"
        style={{ borderRadius: "4px", cursor: "pointer", border: "none" }}
        component="button"
      >
        <Text fz="14px" lh="14px" fw={700}>
          29 Hola street, California, USA
        </Text>
        <UnstyledButton
          w={20}
          h={20}
          className={classes.layout__header__location}
        >
          <IconMapPinFilled color="#e86a12" size="16px" />
        </UnstyledButton>
      </Group>
    </Stack>
  );
};

export default HeaderComponent;
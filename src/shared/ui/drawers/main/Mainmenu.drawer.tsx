import { Badge, DrawerProps, NavLink, Stack, Text } from "@mantine/core";
import DrawerCore from "../core/Drawer.core";
import classes from "./Mainmenu.module.css";
import {
  IconSettings,
  IconShoppingCart,
  IconStackForward,
  IconUserCircle,
} from "@tabler/icons-react";

interface IMainmenuDrawerProps
  extends Pick<DrawerProps, "opened" | "onClose"> {}

const MainmenuDrawer: React.FC<IMainmenuDrawerProps> = (props) => {
  const { opened, onClose } = props;
  return (
    <DrawerCore
      opened={opened}
      onClose={onClose}
      position="left"
      classNames={{
        title: classes.drawer__title,
      }}
      title={
        <Text c="#121212" fw={800} size="lg">
          Awesome pizza
        </Text>
      }
      size="350px"
    >
      <Stack>
        <NavLink
          component="button"
          label={<Text fw={600}>Profile</Text>}
          leftSection={<IconUserCircle stroke={2} color="#E86A12" />}
          classNames={{
            root: classes.menu__navlink,
          }}
        />
        <NavLink
          component="button"
          label={<Text fw={600}>Orders</Text>}
          leftSection={
            <IconStackForward
              stroke={2}
              color="#E86A12"
              className={classes.icon__shopping_cart}
            />
          }
          classNames={{
            root: classes.menu__navlink,
          }}
        />
        <NavLink
          component="button"
          label={<Text fw={600}>Cart</Text>}
          leftSection={<IconShoppingCart stroke={2} color="#E86A12" />}
          rightSection={
            <Badge size="sm" radius="lg" color="red">
              <Text size="sm">1</Text>
            </Badge>
          }
          classNames={{
            root: classes.menu__navlink,
          }}
        />
        <NavLink
          component="button"
          label={<Text fw={600}>Settings</Text>}
          leftSection={<IconSettings stroke={2} color="#E86A12" />}
          classNames={{
            root: classes.menu__navlink,
          }}
        />
      </Stack>
    </DrawerCore>
  );
};

export default MainmenuDrawer;

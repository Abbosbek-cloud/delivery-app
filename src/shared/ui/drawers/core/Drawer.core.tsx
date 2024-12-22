import { Drawer, DrawerProps } from "@mantine/core";

interface DrawerCoreProps extends DrawerProps {
  children: React.ReactNode;
}

const DrawerCore: React.FC<DrawerCoreProps> = ({ children, ...props }) => {
  return <Drawer {...props}>{children}</Drawer>;
};

export default DrawerCore;

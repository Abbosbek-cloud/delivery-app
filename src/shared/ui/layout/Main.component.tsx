import { FC } from "react";
import { HeaderComponent } from ".";
import classes from "./Layout.module.css";
import { Stack } from "@mantine/core";

interface MainComponentProps {
  children: React.ReactNode;
}

const MainComponent: FC<MainComponentProps> = ({ children }) => {
  return (
    <div className={classes.layout__container}>
      <HeaderComponent />
      <Stack component="main" className={classes.layout__main}>
        {children}
      </Stack>
    </div>
  );
};

export default MainComponent;

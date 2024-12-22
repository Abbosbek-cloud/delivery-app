import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Routes, Route } from "react-router";
import HomePage from "./pages/Home.page";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </MantineProvider>
  );
}
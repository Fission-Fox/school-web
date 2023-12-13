import "@/assets/css/tailwind.css";
import { Box } from "@mui/material";
import Header from "../Header";
import Footer from "./footer";

type Prop = {
  children: JSX.Element;
};
export default function Layout({ children }: Prop) {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
}

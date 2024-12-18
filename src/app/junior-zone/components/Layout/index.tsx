import "@/assets/css/tailwind.css";
import { Box } from "@mui/material";
import Header from "../Header";

type Prop = {
  children: JSX.Element;
};
export default function JuniorLayout({ children }: Prop) {
  return (
    <Box>
      <Header />
      <div className="mt-5"></div>
      {children}
    </Box>
  );
}

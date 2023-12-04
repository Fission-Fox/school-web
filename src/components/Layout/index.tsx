import "@/assets/css/tailwind.css";
import { Box } from "@mui/material";
import Header from "../Header";

type Prop = {
    children: JSX.Element
}
export default function Layout({ children }: Prop) {
    return (
        <Box>
            <Header />
            <div className="mt-20">

            </div>
            {children}
        </Box>
    )
}

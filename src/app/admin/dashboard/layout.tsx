"use client";
import { Box } from "@mui/material";
import { useState } from "react";

import { DashboardNavbar } from "./components/Dashboard/DashboardNavbar";
import { Sidebar } from "./components/Sidebar";
import { HTMLHeader } from "./components/htmlHeader";
import { LayoutRoot } from "./components/styled";

type Props = {
  heading?: string;
  children: JSX.Element;
};

export default function Layout(props: Props) {
  const { heading, children } = props;

  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <HTMLHeader heading={heading} />
      <LayoutRoot>
        <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
        <Box
          sx={{
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            width: "100%",
          }}
        >
          {children}
        </Box>
      </LayoutRoot>
      <Sidebar open={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}

"use client";
import { Box } from "@mui/material";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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

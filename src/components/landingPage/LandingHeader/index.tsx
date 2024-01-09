"use client";
import logo from "@/assets/images/bluelogo.png";
import { Close, Menu } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import { FC, useState } from "react";
import Navigation from "../navigation";

const LandingHeader: FC = () => {
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false);
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));

  return (
    <Box sx={{ backgroundColor: "background.paper" }}>
      <Container sx={{ py: { xs: 2, md: 1 } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* <Logo /> */}

          <Image
            src={logo}
            alt=""
            style={{
              width: "110px",
              height: "80px",
              marginTop: "5px",
            }}
          />
          <Box sx={{ ml: "auto", display: { xs: "inline-flex", md: "none" } }}>
            <IconButton onClick={() => setVisibleMenu(!visibleMenu)}>
              <Menu />
            </IconButton>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },

              transition: (theme) => theme.transitions.create(["top"]),
              ...(matchMobileView && {
                py: 6,
                backgroundColor: "background.paper",
                zIndex: "appBar",
                position: "fixed",
                height: { xs: "100vh", md: "auto" },
                top: visibleMenu ? 0 : "-120vh",
                left: 0,
              }),
            }}
          >
            <Box /> {/* Magic space */}
            <Navigation />
            {visibleMenu && matchMobileView && (
              <IconButton
                sx={{
                  position: "fixed",
                  top: 10,
                  right: 10,
                }}
                onClick={() => setVisibleMenu(!visibleMenu)}
              >
                <Close />
              </IconButton>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingHeader;

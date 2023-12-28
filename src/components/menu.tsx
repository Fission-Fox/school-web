import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "@/assets/images/bluelogo.png";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";
type Anchor = "top";
export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 600 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
    </Box>
  );
  return (
    <div className="!flex  lg:!hidden">
      {(["top"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            className="!text-[#00306e] "
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {/* {list(anchor)} */}
            <div>
              <div className="flex justify-between">
                <Image
                  src={logo}
                  alt=""
                  style={{
                    width: "100px",
                  }}
                />
                <div
                  onClick={toggleDrawer(anchor, false)}
                  className="py-2 px-4 text-[#00306e] "
                >
                  <CloseIcon />
                </div>
              </div>

              <div>
                <p className=" px-4 py-4 font-bold h-14 items-center text-[#00306e] hover:text-[#D2093C]">
                  Home
                </p>
              </div>
              <hr />
              <div className="px-4 py-4 font-bold h-14  text-[#00306e] hover:text-[#D2093C]">
                Pages
              </div>
              <hr />
              <div className="px-4 py-4 font-bold h-14   text-[#00306e] hover:text-[#D2093C]">
                Courses
              </div>
              <hr />
              <div className="px-4 py-4 font-bold h-14  text-[#00306e] hover:text-[#D2093C]">
                Blogs
              </div>
              <hr />
              <div className="px-4 py-4 font-bold h-14  text-[#00306e] hover:text-[#D2093C]">
                Contact
              </div>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

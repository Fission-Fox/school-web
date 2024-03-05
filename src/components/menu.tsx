import logo from "@/assets/images/bluelogo.png";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
type Anchor = "top";
export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
  });
  const pathname = usePathname();
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

              <div className=" w-auto flex flex-col items-center  text-[#00306e] !text-base xl:!text-lg gap-6  font-semibold">
                {/* <Link href="#coverimg" onClick={toggleDrawer(anchor, false)}>
                  <div>
                    {" "}
                    <p className="hover:text-[#D2093C] cursor-pointer">Home</p>
                  </div>
                  <hr />
                </Link>
                {(pathname === "/college" || "/coaching") && (
                  <Link href="#about" onClick={toggleDrawer(anchor, false)}>
                    <div>
                      {" "}
                      <p className="hover:text-[#D2093C] cursor-pointer">
                        About Us
                      </p>
                    </div>
                    <hr />
                  </Link>
                )}
                {pathname === "/coaching" &&
                  <Link href="#Achievers">
                    <div>
                      {" "}
                      <p className="hover:text-[#D2093C] cursor-pointer">High Achievers</p>
                    </div>
                  </Link>
                }
                {pathname !== "coaching" && <>  <Link href="#academics" onClick={toggleDrawer(anchor, false)}>
                  <div>
                    {" "}
                    <p className="hover:text-[#D2093C] cursor-pointer">
                      Academics
                    </p>
                  </div>
                  <hr />
                </Link>
                  <Link href="#campuslife" onClick={toggleDrawer(anchor, false)}>
                    <div>
                      <p className="hover:text-[#D2093C] cursor-pointer">
                        Campus life
                      </p>
                    </div>
                    <hr />
                  </Link></>}
                {(pathname !== "/college" || '/coaching') && (
                  <>
                    <Link
                      href="#upcoming"
                      onClick={toggleDrawer(anchor, false)}
                    >
                      <div>
                        {" "}
                        <p className="hover:text-[#D2093C] cursor-pointer">
                          Events
                        </p>
                      </div>
                      <hr />
                    </Link>
                    <Link href="#student" onClick={toggleDrawer(anchor, false)}>
                      <div>
                        <p className="hover:text-[#D2093C] cursor-pointer">
                          Testimonial
                        </p>
                      </div>
                      <hr />
                    </Link>
                  </>
                )}
                <Link href="/" onClick={toggleDrawer(anchor, false)}>
                  <div>
                    <p className="hover:text-[#D2093C] cursor-pointer">
                      Main Page
                    </p>
                  </div>
                  <hr />
                </Link>
                <br /> */}
                <Link href="#coverimg" onClick={toggleDrawer(anchor, false)}>
                  <div>
                    {" "}
                    <p className="hover:text-[#D2093C] cursor-pointer">Home</p>
                  </div>
                </Link>

                {pathname === "/college" ||
                  ("/coaching" && (
                    <Link href="#about" onClick={toggleDrawer(anchor, false)}>
                      <div>
                        {" "}
                        <p className="hover:text-[#D2093C] cursor-pointer">
                          About Us
                        </p>
                      </div>
                    </Link>
                  ))}
                {pathname === "/coaching" && (
                  <Link href="#Achievers" onClick={toggleDrawer(anchor, false)}>
                    <div>
                      {" "}
                      <p className="hover:text-[#D2093C] cursor-pointer">
                        High Achievers
                      </p>
                    </div>
                  </Link>
                )}
                {pathname !== "/coaching" && (
                  <>
                    <Link
                      href="#academics"
                      onClick={toggleDrawer(anchor, false)}
                    >
                      <div>
                        {" "}
                        <p className="hover:text-[#D2093C] cursor-pointer">
                          Academics
                        </p>
                      </div>
                    </Link>
                    <Link
                      href="#campuslife"
                      onClick={toggleDrawer(anchor, false)}
                    >
                      <div>
                        <p className="hover:text-[#D2093C] cursor-pointer">
                          Campus life
                        </p>
                      </div>
                    </Link>
                  </>
                )}
                {pathname !== "/college" ||
                  ("/coaching" && (
                    <>
                      <Link
                        href="#upcoming"
                        onClick={toggleDrawer(anchor, false)}
                      >
                        <div>
                          {" "}
                          <p className="hover:text-[#D2093C] cursor-pointer">
                            Events
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="#student"
                        onClick={toggleDrawer(anchor, false)}
                      >
                        <div>
                          <p className="hover:text-[#D2093C] cursor-pointer">
                            Testimonial
                          </p>
                        </div>
                      </Link>
                    </>
                  ))}
                <Link href="/" onClick={toggleDrawer(anchor, false)}>
                  <div>
                    <p className="hover:text-[#D2093C] cursor-pointer">
                      Main Page
                    </p>
                  </div>
                </Link>
                <br />
              </div>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

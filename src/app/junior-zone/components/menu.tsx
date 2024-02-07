import logo from "@/assets/images/logo3.png";
import { Anchor } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

type Anchor = "right" | "left";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
    left: false,
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
  return (
    <div>
      <div className="!hidden lg:!flex">
        {(["right"] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
              <MenuIcon
                sx={{
                  fontSize: "35px",
                  color: "black",
                  ":hover": { color: "#E8063C" },
                }}
              />
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              <div className="!hidden lg:!flex">
                <Box sx={{ width: 500 }}>
                  <div
                    onClick={toggleDrawer(anchor, false)}
                    className="flex items-end justify-end bg-[#E8063C] text-[#ffffff] w-6 rounded-full mt-2 ml-3"
                  >
                    <CloseIcon />
                  </div>
                  <div className="pl-14 pt-10">
                    <div>
                      <Image style={{ width: "200px" }} src={logo} alt="logo" />
                    </div>
                    <div className="text-[black] text-[14px] font-normal mt-5">
                      We are constantly expanding the range of services <br />
                      offered, taking care of children of all ages.
                    </div>
                    <div className="text-[30px] font-bold mt-8">
                      Get In Touch
                    </div>
                    <div className="mt-6">
                      Monday to Friday: <span>7:30am – 02.00pm</span>
                    </div>
                    <div className="mt-3">
                      Saturday, Sunday:{" "}
                      <span className="font-semibold">Close</span>
                    </div>
                    <div className="flex items-center gap-3 mt-6">
                      <div className="rounded-full h-10 w-10 flex justify-center items-center bg-[#FFD600] hover:border-none ">
                        <EmailIcon />
                      </div>
                      <div>
                        Email:{" "}
                        <span className="hover:text-[#EC063C] cursor-pointer">
                          mralidilshad110@gmail.com
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mt-6">
                      <div className="rounded-full h-10 w-10 flex justify-center items-center bg-[#FFD600] hover:border-none ">
                        <PhoneIphoneIcon />
                      </div>
                      <div>
                        Phone:{" "}
                        <span className="hover:text-[#EC063C] cursor-pointer">
                          (021) 34973439
                        </span>
                      </div>
                    </div>
                    {/* <div className="text-[30px] font-bold mt-8">
                      Latest News
                    </div>
                    <div className="flex items-center mt-6 gap-4">
                      <div>
                        <img
                          className="rounded-2xl"
                          src="https://html.vecurosoft.com/kiddino/demo/assets/img/blog/recent-post-1-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="flex gap-1 text-[#E8063C] hover:text-[black] items-center">
                          <div>
                            <CalendarMonthIcon />
                          </div>
                          <div>December 3, 2022</div>
                        </div>
                        <div className="text-[20px] font-bold hover:text-[#E8063C]">
                          A very warm welcome to our <br />
                          new Treasurer
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center mt-3 gap-4">
                      <div>
                        <img
                          className="rounded-2xl"
                          src="https://html.vecurosoft.com/kiddino/demo/assets/img/blog/recent-post-1-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="flex gap-1 text-[#E8063C] hover:text-[black] items-center">
                          <div>
                            <CalendarMonthIcon />
                          </div>
                          <div>February 15, 2022</div>
                        </div>
                        <div className="text-[20px] font-bold hover:text-[#E8063C]">
                          German kinder and garten <br />
                          mean child
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center mt-3 gap-4">
                      <div>
                        <img
                          className="rounded-2xl"
                          src="https://html.vecurosoft.com/kiddino/demo/assets/img/blog/recent-post-1-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="flex gap-1 text-[#E8063C] hover:text-[black] items-center">
                          <div>
                            <CalendarMonthIcon />
                          </div>
                          <div>Augest 20, 2022</div>
                        </div>
                        <div className="text-[20px] font-bold hover:text-[#E8063C]">
                          English uses term to refer to <br />
                          the earliest
                        </div>
                      </div>
                    </div> */}
                  </div>
                </Box>
              </div>
            </Drawer>
          </React.Fragment>
        ))}
      </div>
      <div className="!flex lg:!hidden">
        {(["left"] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
              <MenuIcon
                sx={{
                  fontSize: "35px",
                  color: "black",
                  ":hover": { color: "#E8063C" },
                }}
              />
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {/* {list(anchor)} */}
              <div>
                <Box sx={{ width: 300 }}>
                  <div
                    onClick={toggleDrawer(anchor, false)}
                    className="flex items-end justify-end bg-[#E8063C] text-[#ffffff] w-6 rounded-full mt-2 ml-3"
                  >
                    <CloseIcon />
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mt-10">
                      <Image style={{ width: "200px" }} src={logo} alt="logo" />
                    </div>
                    <div className="mt-10">
                      <div className="flex justify-between ml-7 mr-7">
                        <div className="flex gap-2 items-center">
                          <Link href={"#home"}>
                            <div className="font-extrabold">Home</div>
                          </Link>
                        </div>
                      </div>
                      <hr className="w-[80%] ml-8 mt-3" />
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between ml-7 mr-7">
                        <div className="flex gap-2 items-center">
                          <Link href={"#aboutUs"}>
                            <div className="font-extrabold">About Us</div>
                          </Link>
                        </div>
                      </div>
                      <hr className="w-[80%] ml-8 mt-3" />
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between ml-7 mr-7">
                        <div className="flex gap-2 items-center">
                          <Link href={"#classes"}>
                            <div className="font-extrabold">Classes</div>
                          </Link>
                        </div>
                      </div>
                      <hr className="w-[80%] ml-8 mt-3" />
                    </div>
                    {/* <div className="mt-3">
                      <div className="flex justify-between ml-7 mr-7">
                        <div className="flex gap-2 items-center">
                         
                          <div className="font-extrabold">Blogs</div>
                        </div>
                       
                      </div>
                      <hr className="w-[80%] ml-8 mt-3" />
                    </div> */}
                    <div className="mt-3">
                      <div className="flex justify-between ml-7 mr-7">
                        <div className="flex gap-2 items-center">
                          <Link href={"#testimonial"}>
                            <div className="font-extrabold">Testimonials</div>
                          </Link>
                        </div>
                      </div>
                      <hr className="w-[80%] ml-8 mt-3" />
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between ml-7 mr-7">
                        <div className="flex gap-2 items-center">
                          <Link href={"#contact"}>
                            <div className="font-extrabold">Contact Us</div>
                          </Link>
                        </div>
                      </div>
                      <hr className="w-[80%] ml-8 mt-3" />
                    </div>
                  </div>
                </Box>
              </div>
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

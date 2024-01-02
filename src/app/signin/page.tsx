import { Button } from "@mui/material";
import Image from "next/image";
import logo from "@/assets/images/bluelogo.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Visibility from "@mui/icons-material/Visibility";
const Page = () => {
  return (
    <>
      <div className="w-full justify-between flex  bg-slate-200 h-screen items-center ">
        <div className="ml-44">
          <Image src={logo} alt="" />
        </div>

        <div className="w-[500px] shadow-2xl bg-white flex flex-col justify-center   items-center rounded-md mr-44 ">
          <p className="font-bold mt-10 text-center"> SIGN IN</p>

          <input
            className="border-2 border-gray-300 w-[90%] h-9 rounded m-4 p-2 "
            id="em"
            type="email"
            placeholder="Email"
          />

          <input
            className="border-2 border-gray-300  h-9 rounded w-[90%] m-4 p-2"
            type="password"
            placeholder="Password"
          />
          <p className="text-sm font-thin m-4 cursor-pointer">
            forgot password?
          </p>
          <Button
            sx={{
              backgroundColor: "#5048e5",
              color: "white",
              marginBottom: "45px",
              width: "90%",
            }}
            variant="contained"
            fullWidth
          >
            SUBMIT{" "}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Page;

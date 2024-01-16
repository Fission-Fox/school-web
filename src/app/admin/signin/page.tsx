"use client";
import logo from "@/assets/images/bluelogo.png";
import { loginAdmin } from "@/config/firebase";
import { Button, CircularProgress } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const login = async () => {
    setLoader(true);
    if (email && password) {
      const user: any = await loginAdmin(email, password);
      console.log("dddd", user);
      if (user) {
        router.push("/admin/dashboard");
      } else {
        toast.error("Something Went Wrong");
      }
    }
    setLoader(false);
  };
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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />

          <input
            className="border-2 border-gray-300  h-9 rounded w-[90%] m-4 p-2"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          {/* <p className="text-sm font-thin m-4 cursor-pointer">
            forgot password?
          </p> */}
          {loader ? (
            <CircularProgress />
          ) : (
            <Button
              sx={{
                backgroundColor: "#5048e5",
                color: "white",
                marginBottom: "45px",
                width: "90%",
              }}
              variant="contained"
              fullWidth
              onClick={login}
            >
              SUBMIT{" "}
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;

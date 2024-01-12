"use client";
import Input from "@/app/student-zone/admission/components/formInput";
import styled from "@emotion/styled";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { AppButton } from "../components/Button";
const DashboardLayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 64,
  paddingBottom: 64,
}));

export default function Page() {
  const router = useRouter();
  // const pid = router.query.pid;
  const form = useForm<any>();
  const { register, control, formState, setValue, handleSubmit } = form;

  useEffect(() => {
    const getData = async () => {
      // if (pid) {
      // const res = await getUserDetails(pid)
      // formik.setFieldValue('email', res?.email)
      // formik.setFieldValue('first_name', res?.first_name)
      // formik.setFieldValue('last_name', res?.last_name)
      // formik.setFieldValue('phone', res?.phone)
      // }
    };
    getData();
  }, []);
  return (
    <DashboardLayoutRoot>
      <Box
        sx={{
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <form
          // onSubmit={formik.handleSubmit}
          style={{ width: "100%", margin: "0rem 1rem" }}
        >
          <Card>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <KeyboardBackspaceIcon
                  style={{
                    fontSize: "40px",
                    cursor: "pointer",
                    marginLeft: "20px",
                  }}
                  onClick={() => {
                    router.push("/users");
                  }}
                />

                <CardHeader title={"Update User"} />
              </div>
              {/* {loading ? (
                            <CircularProgress style={{ marginRight: '30px' }} />
                        ) : ( */}
              <AppButton
                sx={{
                  mx: 1,
                  width: "60px",
                  height: "40px",
                  marginRight: "26px",
                }}
                type="submit"
                title={"SAVE"}
              />
              {/* )} */}
            </div>
            <Divider style={{ borderColor: "#E6E8F0" }} />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <Input
                    label={"First name *"}
                    type="text"
                    htmlFor="firstname"
                    register={{
                      ...register("firstname", {
                        required: " required",
                      }),
                    }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </form>
      </Box>
    </DashboardLayoutRoot>
  );
}

// export default Page;

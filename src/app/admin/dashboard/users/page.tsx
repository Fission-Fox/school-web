"use client";
import { Box, Container } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AppButton } from "../components/Button";
import { List } from "../components/ListComponent";

export default function Page() {
  const [users, setUsers] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const getData = async () => {
      // const res: any = await getUsers()
      // setUsers(res)
    };
    getData();
  }, []);
  const COLUMNS = [
    { dataField: "email", caption: "Email" },
    { dataField: "first_name", caption: "First Name" },
    { dataField: "last_name", caption: "Last Name" },
    { dataField: "phone", caption: "Phone" },
  ];
  return (
    <div>
      <Box>
        <Container maxWidth={false}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 30,
              marginBottom: 10,
            }}
          >
            <h2 style={{ fontWeight: 700, fontSize: "2rem" }}>User Details</h2>
            <div>
              <AppButton
                sx={{ mx: 3, px: "20px", py: "10px" }}
                onClick={() => {
                  router.push("/admin/dashboard/users/add");
                }}
                title={"Add User"}
              />
            </div>
          </div>

          <div
            style={{ minWidth: "300px", maxWidth: "100%", overflowX: "auto" }}
          >
            <div style={{ minWidth: "1300px", width: "100%" }}>
              <List
                columns={COLUMNS}
                content={users}
                url={"admin/dashboard/users"}
                editCol={true}
              />
            </div>
          </div>
          {/* <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                        }}
                    >
                        <div>
                            {loading1 ? (
                                <CircularProgress />
                            ) : !query?.data?.data.previous ? null : (
                                <AppButton title="Previous" onClick={previous} />
                            )}
                        </div>
                        <div>
                            {loading ? (
                                <CircularProgress />
                            ) : query?.data?.data.next ? (
                                <AppButton title="Next" onClick={next} />
                            ) : null}
                        </div>
                    </div> */}
        </Container>
      </Box>
    </div>
  );
}

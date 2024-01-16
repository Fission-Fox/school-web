"use client";
import { getSubmissions } from "@/config/firebase";
import { TStudent } from "@/types/admission";
import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { List } from "../components/ListComponent";

export default function Page() {
  const [submission, setSubmissions] = useState<TStudent[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res: any = await getSubmissions();
      setSubmissions(res);
    };
    getData();
  }, []);
  const COLUMNS = [
    { dataField: "admissionFor", caption: "Admission For " },
    { dataField: "admissionType", caption: "Admission Type" },
    { dataField: "class", caption: "Class" },
    { dataField: "firstname", caption: "First Name" },
    { dataField: "lastname", caption: "Last Name" },
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
            <h2 style={{ fontWeight: 700, fontSize: "2rem" }}>Submissions</h2>
            {/* <div>
              <AppButton
                sx={{ mx: 3, px: "20px", py: "10px" }}
                onClick={() => {
                  router.push("/users/add");
                }}
                title={"Add User"}
              />
            </div> */}
          </div>

          <div
            style={{ minWidth: "300px", maxWidth: "100%", overflowX: "auto" }}
          >
            <div style={{ minWidth: "1300px", width: "100%" }}>
              <List
                columns={COLUMNS}
                content={submission}
                url={"/dashboard/admissions"}
                detailCol={true}
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

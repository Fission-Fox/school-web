"use client";
import { TStudent } from "@/types/admission";
import { Box, Container } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AppButton } from "../components/Button";
import { List } from "../components/ListComponent";
// import { List } from "../components/ListComponent";

export default function Page() {
  const [submission, setSubmissions] = useState<TStudent[]>([]);
  const router = useRouter();
  useEffect(() => {
    const getData = async () => {
      // const res: any = await getSubmissions();
      setSubmissions([]);
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
            <h2 style={{ fontWeight: 700, fontSize: "2rem" }}>Blogs</h2>
            <div>
              <AppButton
                sx={{ mx: 3, px: "20px", py: "10px" }}
                onClick={() => {
                  router.push("/admin/dashboard/blogposts/create");
                }}
                title={"Add Blog"}
              />
            </div>
          </div>

          <div
            style={{ minWidth: "300px", maxWidth: "100%", overflowX: "auto" }}
          >
            <div style={{ minWidth: "1300px", width: "100%" }}>
              <List
                columns={COLUMNS}
                content={submission}
                url={"/admin/dashboard/blogposts"}
                detailCol={true}
              />
            </div>
          </div>
        </Container>
      </Box>
    </div>
  );
}

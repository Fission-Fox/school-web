"use client";
import collageLogo from "@/assets/images/bluelogo.png";
import coachingLogo from "@/assets/images/coachinglogo.png";
import juniorLogo from "@/assets/images/logo3.png";
import { getSubmissionsByID } from "@/config/firebase";
import { TStudent } from "@/types/admission";
import { Box, CircularProgress, Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
interface Props {
  params: {
    id: number;
  };
}
export default function Page({ params }: Props) {
  const [submission, setSubmissions] = useState<TStudent>();

  useEffect(() => {
    const getData = async () => {
      const res: any = await getSubmissionsByID(
        params?.id as unknown as string,
      );
      setSubmissions(res);
    };
    if (params && params?.id) getData();
  }, [params]);

  const getImage = () => {
    switch (submission?.admissionFor) {
      case "School":
        return collageLogo;
      case "Collage":
        return collageLogo;
      case "Day Care":
        return juniorLogo;

      default:
        return coachingLogo;
    }
  };

  if (!submission) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <CircularProgress />
      </div>
    );
  }
  return (
    <Box
      sx={{
        backgroundColor: "#E2E8F0",
        width: "100%",
        minHeight: "100vh",
        padding: "10px",
      }}
    >
      <Container maxWidth={false}>
        <div className="w-[90%] flex justify-between items-center">
          <Link href={"/admin/dashboard/admissions"}>
            <p className="font-semibold "> ⬅ Back</p>
          </Link>

          <p className="text-2xl font-bold text-center my-2">Student Data</p>
          <div></div>
        </div>

        <div className="w-full flex flex-col sm:flex-row  gap-3">
          <div className="w-[90%]   mx-auto sm:w-[29%] flex flex-col justify-between   bg-white rounded-lg py-3">
            <div className="w-full flex flex-col items-center">
              <img src={submission?.image} className="w-1/2" />
              <p className="my-2 font-semibold">
                {submission?.firstname + " " + submission?.last_school}
              </p>
              <p>{submission?.student_phone}</p>
              <p>{submission?.student_email}</p>
            </div>
            <div>
              <Image src={getImage()} className="w-[60%] m-auto" alt="" />
            </div>
          </div>
          <div className="w-[90%] mx-auto md:w-[69%] grid gap-x-3 mb-6 md:grid-cols-3 bg-white rounded-lg py-3 ">
            <AdmissionItem
              label={"Admission For"}
              value={submission?.admissionFor}
            />
            {submission?.admissionFor !== "Day Care" && (
              <>
                <AdmissionItem
                  label={"Admission Type"}
                  value={submission?.admissionType}
                />
                <AdmissionItem
                  label={"Admission Class"}
                  value={submission?.class}
                />
                <AdmissionItem
                  label={"Previous Exam Class"}
                  value={submission?.previous_class}
                />
                <AdmissionItem
                  label={"Previous Exam Percentage"}
                  value={submission?.previous_percentage}
                />
                <AdmissionItem
                  label={"Previous Exam School"}
                  value={submission?.present_school}
                />
              </>
            )}

            <AdmissionItem label={"First Name"} value={submission?.firstname} />
            <AdmissionItem label={"Last Name"} value={submission?.lastname} />
            <AdmissionItem label={"S/o. D/o"} value={submission?.sonOf} />
            <AdmissionItem
              label={"Place of Birth"}
              value={submission?.birthPlace}
            />
            <AdmissionItem label={"Region"} value={submission?.region} />
            <AdmissionItem
              label={"Father’s Occupation"}
              value={submission?.father_occupation}
            />
            <AdmissionItem
              label={"Father’s Cell#"}
              value={submission?.father_phone}
            />
            <AdmissionItem
              label={"Mother’s Cell#"}
              value={submission?.mother_phone}
            />
            <AdmissionItem label={"Address "} value={submission?.address} />
            <AdmissionItem
              label={"Student’s Cell"}
              value={submission?.student_phone}
            />
            <AdmissionItem label={"Home Cell"} value={submission?.home_phone} />
            <AdmissionItem
              label={"Name Of Present School/College"}
              value={submission?.present_school}
            />
            <AdmissionItem label={"Date Of Birth"} value={submission?.DOB} />
            <AdmissionItem
              label={"Parent’s Email ID "}
              value={submission?.parent_email}
            />
            <AdmissionItem
              label={"Parent’s Email ID "}
              value={submission?.parent_email}
            />
            <AdmissionItem
              label={"Student’s Email ID "}
              value={submission?.student_email}
            />
            <AdmissionItem label={"Relation "} value={submission?.relation} />
            <div className="w-[90%] px-3 py-1 ">
              <p className="mb-2 text-sm font-medium text-gray-900">
                Compulsory Subjects
              </p>

              <div className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
                {submission.subjects?.compulsory?.map((itm: string) => {
                  return <p>{itm}</p>;
                })}
              </div>
            </div>
            <div className="w-[90%] px-3 py-1 ">
              <p className="mb-2 text-sm font-medium text-gray-900">
                Optional Subjects
              </p>

              <div className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
                {submission.subjects?.optional?.map((itm: string) => {
                  return <p>{itm}</p>;
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
}

const AdmissionItem = ({ label, value }: any) => {
  return (
    <div className="w-[90%] px-3 py-1">
      <p className="mb-2 text-sm font-medium text-gray-900">{label}</p>
      <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
        <p>{value}</p>
      </div>
    </div>
  );
};

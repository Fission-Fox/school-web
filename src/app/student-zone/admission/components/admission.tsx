"use client";
import { Checkbox, CircularProgress, FormControlLabel } from "@mui/material";
// import emailjs from 'emailjs-com';
import { useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import SelectDropdown from "./dropdown";
import Input from "./formInput";
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import {
  addSubmission,
  getAdmissionFor,
  getAdmissionType,
  getClass,
} from "@/config/firebase";
import { TStudent } from "@/types/admission";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import InputFileUpload from "./imageUpload";
import PrintComponent from "./printComponent";
export default function Admission() {
  const [formType, setType] = useState("");
  const [loading, setLoader] = useState(false);
  const [classe, setClass] = useState("");
  const [file, setFiles] = useState<any>();
  const [admissionFor, setAdmissionFor] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [values, setFieldValue] = useState<any>();
  const [selectedSubjects, setSelectedSubjects] = useState({
    compulsory: [],
    optional: [],
  });
  const [admissionType, setAdmissionType] = useState<any[]>([]);
  const [admissionfor, setAdmissionfor] = useState<any[]>([]);
  const [Class, Setclass] = useState<any[]>([]);
  const form = useForm<TStudent>();
  const { register, control, formState, setValue, handleSubmit } = form;

  const handleSubjectSelection = (subject: string, category: string) => {
    const updatedSubjects: any = { ...selectedSubjects };
    updatedSubjects[category] = [...updatedSubjects[category], subject];
    setSelectedSubjects(updatedSubjects);
  };

  const subjectsMap: any = {
    "O & A Levels": {
      compulsory: [
        "English",
        "Geography",
        "History",
        "Urdu",
        "Islamic Studies",
      ],
      optional: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Additional Mathematics",
        "Sociology",
        "Biology",
        "Computer Science",
        "Economics",
        "Accounting",
      ],
    },
    "AKU-EB": {
      compulsory: ["Urdu", "Islamiyat / Ethics", "Pakistan Studies", "English"],
      optional: [
        "Physics",
        "Mathematics",
        "Chemistry",
        "Biology",
        "Computer Science",
      ],
    },
    Commerce: {
      compulsory: [
        "English",
        "Geography",
        "History",
        "Urdu",
        "Islamic Studies",
      ],
      optional: [
        "Accounting",
        "Business Mathematics",
        "General Mathematics",
        "Economics",
        "Principles of Commerce (POC)",
        "Statistics",
        "Computer Science",
      ],
    },
  };
  useEffect(() => {
    const getData = async () => {
      const res: any = await getAdmissionType();
      setAdmissionType(res);
      const res1: any = await getAdmissionFor();
      res1.sort();
      res1.sort((a: any, b: any) => a.orderNo - b.orderNo);
      setAdmissionfor(res1);
      const res2: any = await getClass();
      Setclass(res2);
    };
    getData();
  }, []);

  const filteredClass = Class?.filter(
    (itm) => itm?.admissionTypeID?.includes(formType),
  );
  const filteredAdmission = admissionType?.filter(
    (itm) => itm?.admissionForID?.includes(admissionFor),
  );

  const getClasses = () => {
    let data: any = [];
    if (filteredClass && filteredClass.length) {
      if (admissionFor === "K2RjSRIR5XutN6pf0xGE") {
        data = filteredClass.filter(
          (itm) => itm.class == " XI" || itm.class == "XII",
        );
        return data
          ?.sort((a: any, b: any) => a?.order - b?.order)
          ?.map((itm: any) => {
            return { name: itm.class, ...itm };
          });
      }

      if (admissionFor === "sr1xzIrr1LygTQQRyBGy") {
        data = filteredClass.filter(
          (itm) => !itm?.class?.includes("XI") && !itm?.class?.includes("XII"),
        );
        return data
          .sort((a: any, b: any) => a?.order - b?.order)
          .map((itm: any) => {
            return { name: itm.class, ...itm };
          });
      }

      return filteredClass
        ?.sort((a: any, b: any) => a?.order - b?.order)
        ?.map((itm: any) => {
          return { name: itm.class, ...itm };
        });
    }
  };

  const admissionTypeName = filteredAdmission?.find(
    (itm) => itm.id === formType,
  );
  const admissionForName = admissionfor?.find((itm) => itm.id === admissionFor);
  const componentRef: any = useRef();
  return (
    <div className="w-full bg-slate-200 py-10 ">
      <div className="w-full md:w-[50%] bg-white rounded-lg  py-3 m-auto space-y-10 divide-y mt-32 divide-gray-900/10">
        <div>
          <div style={{ display: "none" }}>
            <PrintComponent ref={componentRef} values={values} />
          </div>
        </div>
        {/* <PrintComponent ref={componentRef} data={{ admissionTypeName: admissionTypeName, ...values }} /> */}
        <div>
          <div className="px-4 sm:px-0">
            <h2 className="text-5xl text-center my-4 font-semibold  text-gray-900">
              ADMISSION FORM
            </h2>
          </div>
          <form
            onSubmit={handleSubmit(async (data) => {
              if (formSubmitted) {
                return;
              }

              if (!file || !admissionFor) {
                return toast.info("Please Enter Full Details");
              }

              setLoader(true);
              const admissionTypeName = filteredAdmission?.find(
                (itm) => itm.id === formType,
              );
              const admissionForName = admissionfor?.find(
                (itm) => itm.id === admissionFor,
              );
              const className = filteredClass?.find((itm) => itm.id === classe);
              // console.log({
              //   ...data,
              //   admissionFor: admissionForName?.admissionFor,
              //   admissionForID: admissionFor,
              //   admissionTypeID: formType,
              //   admissionType: admissionTypeName?.admissionType,
              //   classID: classe,
              //   class: className?.class,
              // });
              if (admissionFor !== "m8TYVlxDPWcyHxgZOF6N") {
                setFieldValue({
                  ...data,
                  admissionFor: admissionForName?.admissionFor,
                  admissionForID: admissionFor,
                  admissionTypeID: formType,
                  admissionType: admissionTypeName?.admissionType,
                  classID: classe ?? "",
                  class: className?.class ?? "",
                  subjects: selectedSubjects ?? "",
                });
                await addSubmission(
                  {
                    ...data,
                    admissionFor: admissionForName?.admissionFor,
                    admissionForID: admissionFor,
                    admissionTypeID: formType,
                    admissionType: admissionTypeName?.admissionType,
                    classID: classe ?? "",
                    class: className?.class ?? "",
                    subjects: selectedSubjects ?? "",
                  },
                  file,
                  setFormSubmitted,
                  setLoader,
                );
              } else {
                setFieldValue({
                  ...data,
                  admissionFor: admissionForName?.admissionFor,
                });
                await addSubmission(
                  {
                    ...data,
                    admissionFor: admissionForName?.admissionFor,
                  },
                  file,
                  setFormSubmitted,
                  setLoader,
                );
              }
            })}
            className="bg-white shadow-sm ring-1 py-3 ring-gray-900/5 sm:rounded-xl md:col-span-2"
          >
            <div className="w-full flex justify-center ">
              <InputFileUpload setFiles={setFiles} />
            </div>
            <div className="flex flex-wrap gap-4 justify-evenly">
              <SelectDropdown
                label={"Admission for"}
                setValue={setAdmissionFor}
                list={
                  admissionfor && admissionfor.length
                    ? admissionfor?.map((itm) => {
                        return { name: itm.admissionFor, ...itm };
                      })
                    : []
                }
              />
              {admissionFor !== "m8TYVlxDPWcyHxgZOF6N" && (
                <>
                  <SelectDropdown
                    setValue={setType}
                    func={() => {
                      setSelectedSubjects({ compulsory: [], optional: [] });
                    }}
                    label={"Admission type"}
                    list={
                      filteredAdmission && filteredAdmission?.length
                        ? filteredAdmission?.map((itm) => {
                            return { name: itm.admissionType, ...itm };
                          })
                        : []
                    }
                  />
                  {admissionForName?.admissionFor !== "Pre Primary" && (
                    <SelectDropdown
                      setValue={setClass}
                      label={"Classes"}
                      list={getClasses() ?? []}
                    />
                  )}
                </>
              )}
            </div>
            {/* <div className="flex justify-center">
                        <Example heading={"Federal / AKU-EB"} list={people3} />
                    </div> */}
            {admissionFor !== "m8TYVlxDPWcyHxgZOF6N" && (
              <>
                <div className="flex flex-wrap justify-evenly mt-8">
                  <div>
                    <div className="font-semibold">Compulsory Subjects</div>

                    <div className="text-[14px] pl-1 w-32 mt-2">
                      {subjectsMap[
                        admissionTypeName?.admissionType
                      ]?.compulsory.map((itm: string) => {
                        return (
                          <div className="mb-1">
                            <FormControlLabel
                              onChange={(e: any) =>
                                handleSubjectSelection(
                                  e.target.value,
                                  "compulsory",
                                )
                              }
                              value={itm}
                              control={<Checkbox />}
                              label={itm}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">Optional Subjects</div>

                    <div className="text-[14px] pl-1 w-32 mt-2">
                      {subjectsMap[
                        admissionTypeName?.admissionType
                      ]?.optional.map((itm: string) => {
                        return (
                          <div className="mb-1">
                            <FormControlLabel
                              onChange={(e: any) =>
                                handleSubjectSelection(
                                  e.target.value,
                                  "optional",
                                )
                              }
                              value={itm}
                              control={<Checkbox />}
                              label={itm}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <hr />
                <div className="px-4 py-6 sm:p-8">
                  <p className="text-center text-2xl">
                    Previous Examination Report
                  </p>
                  <div className="grid max-w-full grid-cols-1 gap-x-6 gap-y-8  mt-10 sm:grid-cols-6">
                    <div className="sm:col-span-1">
                      <Input
                        label={"Class *"}
                        type="text"
                        htmlFor="previous_class"
                        register={{
                          ...register("previous_class", {
                            required: " required",
                          }),
                        }}
                      />
                    </div>
                    <div className="sm:col-span-1">
                      <Input
                        label={"Percentage % *"}
                        type="number"
                        htmlFor="previous_percentage"
                        register={{
                          ...register("previous_percentage", {
                            required: " required",
                          }),
                        }}
                      />
                    </div>
                    <div className="sm:col-span-4">
                      <Input
                        label={"Name of last School/College *"}
                        type="text"
                        htmlFor="last_school"
                        register={{
                          ...register("last_school", {
                            required: " required",
                          }),
                        }}
                      />
                    </div>
                  </div>
                </div>
                <hr />
              </>
            )}

            <div className="px-4 py-6 sm:p-8">
              <div className="grid max-w-full grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
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
                </div>

                <div className="sm:col-span-3">
                  <Input
                    label={"Last name *"}
                    type="text"
                    htmlFor="lastname"
                    register={{
                      ...register("lastname", {
                        required: " required",
                      }),
                    }}
                  />
                </div>
                <div className="sm:col-span-2">
                  <Input
                    label={"S/o. D/o *"}
                    type="text"
                    htmlFor="sonOf"
                    register={{
                      ...register("sonOf", {
                        required: " required",
                      }),
                    }}
                  />
                </div>
                <div className="sm:col-span-2">
                  <Input
                    label={"Place of Birth *"}
                    type="text"
                    htmlFor="birthPlace"
                    register={{
                      ...register("birthPlace", {
                        required: " required",
                      }),
                    }}
                  />
                </div>
                <div className="sm:col-span-2">
                  <Input
                    label={"Region *"}
                    type="text"
                    htmlFor="region"
                    register={{
                      ...register("region", {
                        required: " required",
                      }),
                    }}
                  />
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <Input
                    label={"Father’s Occupation *"}
                    type="text"
                    htmlFor="father_occupation"
                    register={{
                      ...register("father_occupation", {
                        required: " required",
                      }),
                    }}
                  />
                </div>

                <div className="sm:col-span-2">
                  <Input
                    label={"   Father’s Cell# *"}
                    type="number"
                    htmlFor="father_phone"
                    register={{
                      ...register("father_phone", {
                        required: " required",
                      }),
                    }}
                  />
                </div>

                <div className="sm:col-span-2">
                  <Input
                    label={"    Mother’s Cell# *"}
                    type="number"
                    htmlFor="mother_phone"
                    register={{
                      ...register("mother_phone", {
                        required: " required",
                      }),
                    }}
                  />
                </div>

                <div className="col-span-full">
                  <Input
                    label={"    Address *"}
                    type="text"
                    htmlFor="address"
                    register={{
                      ...register("address", {
                        required: " required",
                      }),
                    }}
                  />
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <Input
                    label={"    Student’s Cell *"}
                    type="text"
                    htmlFor="student_phone"
                    register={{
                      ...register("student_phone", {
                        required: " required",
                      }),
                    }}
                  />
                </div>

                <div className="sm:col-span-2">
                  <Input
                    label={"Home Cell *"}
                    type="text"
                    htmlFor="home_phone"
                    register={{
                      ...register("home_phone", {
                        required: " required",
                      }),
                    }}
                  />
                </div>

                <div className="sm:col-span-3">
                  <Input
                    label={" Name Of Present School/College *"}
                    type="text"
                    htmlFor="present_school"
                    register={{
                      ...register("present_school", {
                        required: " required",
                      }),
                    }}
                  />
                </div>
                <div className="sm:col-span-3">
                  <Input
                    label={" Date Of Birth *"}
                    type="date"
                    htmlFor="DOB"
                    register={{
                      ...register("DOB", {
                        required: " required",
                      }),
                    }}
                  />
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <Input
                    label={" Parent’s Email ID *"}
                    type="email"
                    htmlFor="parent_email"
                    register={{
                      ...register("parent_email", {
                        required: " required",
                      }),
                    }}
                  />
                </div>

                <div className="sm:col-span-2">
                  <Input
                    label={"  Student’s Email ID *"}
                    type="email"
                    htmlFor="student_email"
                    register={{
                      ...register("student_email", {
                        required: " required",
                      }),
                    }}
                  />
                </div>

                <div className="sm:col-span-2">
                  <Input
                    label={"  Relation *"}
                    type="text"
                    htmlFor="student_email"
                    register={{
                      ...register("relation", {
                        required: " required",
                      }),
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
              <div className="w-full  ">
                <p className="text-center text-xl font-bold my-5">
                  SALIENT FEATURES
                </p>
                <div className="flex text-sm w-full justify-center">
                  <div className="w-[48%] ">
                    <p> ☆ Parents Teachers Meeting On Regular Basis</p>
                    <p> ☆ Girls & Boys Separate classes</p>
                    <p> ☆ Supporting Classes</p>
                    <p>
                      {" "}
                      ☆ Provides notes for all subjects according to new
                      syllabus (available in Urdu & English)
                    </p>
                    <p> ☆ Online Lecture & Assignment are available</p>
                  </div>
                  <div className="w-[48%]">
                    <p> ☆ Regular Practice Of Past Paper Before Mock</p>
                    <p> ☆ Computrized Academic Record Of Each Student</p>
                    <p> ☆ Transport are available</p>
                    <p> ☆ Multimedia & Internet Facility available/Sms Alert</p>
                    <p> ☆ Temperature controlled class rooms</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-900/10 w-full mt-7">
                <p className="text-center text-xl font-bold my-5">
                  RULES & REGULATIONS{" "}
                </p>
                <div className="text-sm mb-4">
                  <p>
                    ✔ Student should write correct name, address in the form
                    and attach a copy of CNIC of their Parents / Guardians
                  </p>
                  <p>
                    ✔ After the Admission, a card will be issued by the
                    administration to the student and he/she is required to show
                    the card for the entrance in the institute
                  </p>
                  <p>
                    ✔ If any student is found smoking, using narcotics or
                    involved in unwarranted behaviour, his/her name will be
                    struck off from the rolls and the fee will not be refunded
                  </p>
                  <p>
                    ✔ Students will be responsible for their vehicles,
                    calculators, mobile and other things
                  </p>
                  <p>
                    ✔ If the Students` card is lost, he/she will have to pay
                    Rs. 200/- for the issuance of new card
                  </p>
                  <p>
                    ✔ If due to some unavoidable reasons, any student is absent
                    for a long period. His/Her application for the exemption of
                    that month fee can be considered
                  </p>
                  <p>
                    ✔ In Case of transfer from one section to the other,student
                    will have to pay complete fees in the new section
                  </p>
                  <p>
                    ✔ Institute reserves the right of refusal/cancellation of
                    admission without any prior notice
                  </p>
                  <p>
                    ✔ Installment fee must be paid with in start of every month
                    or as per scheduled after due date Rs.500/- will be charged
                    as late fee.
                  </p>
                  <p>
                    ✔ Student should mark their attendance at the time of
                    reporting.
                  </p>
                  <p>
                    ✔ If any unseen situation occurs outside the Institute
                    Students` Zone will not be responsible for it.
                  </p>
                  <p>
                    ✔ Name of the student will be registered after submission
                    of the admission from along with any admission fee and first
                    tuition fee.
                  </p>
                  <p>
                    ✔ Fees will not be refunded or transferred in any
                    circumtaces.
                  </p>
                  <p>
                    ✔ Mobile and any Entertainment devices are strictly not
                    allowed.
                  </p>
                  <p>
                    ✔ Annual Prize Distribution ceremony charges are mandatory.
                  </p>
                </div>
              </div>
              {formSubmitted ? (
                <ReactToPrint
                  trigger={() => (
                    <button className="rounded-md text-xl bg-[#00306E!important] px-8 py-2 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Generate Fee Challan
                    </button>
                  )}
                  content={() => componentRef.current}
                />
              ) : loading ? (
                <CircularProgress />
              ) : (
                <button
                  type="submit"
                  className="rounded-md text-xl bg-[#00306E!important] px-8 py-2 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

"use client";
import { Checkbox, CircularProgress, FormControlLabel } from "@mui/material";
// import emailjs from 'emailjs-com';
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import SelectDropdown from "./dropdown";
import Input from "./formInput";
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { EMAIL_SERVICE_ID, TEMPLATE_ID } from "@/config/environments";
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
export default function Admission() {
  const [formType, setType] = useState("");
  const [loading, setLoader] = useState(false);
  const [classe, setClass] = useState("");
  const [file, setFiles] = useState<any>();
  const [admissionFor, setAdmissionFor] = useState("");
  const [checkedvalue, setChecked] = useState<string[]>([]);
  const [admissionType, setAdmissionType] = useState<any[]>([]);
  const [admissionfor, setAdmissionfor] = useState<any[]>([]);
  const [Class, Setclass] = useState<any[]>([]);
  const form = useForm<TStudent>();
  const { register, control, formState, setValue, handleSubmit } = form;
  const handleChage = (event: any) => {
    const { value, checked } = event.target;
    if (checked) {
      setChecked((pre) => [...pre, value]);
    } else
      setChecked((pre) => {
        return [...pre.filter((skill) => skill !== value)];
      });
  };

  useEffect(() => {
    const getData = async () => {
      const res: any = await getAdmissionType();
      setAdmissionType(res);
      const res1: any = await getAdmissionFor();
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
        return data?.map((itm: any) => {
          return { name: itm.class, ...itm };
        });
      }

      if (admissionFor === "sr1xzIrr1LygTQQRyBGy") {
        data = filteredClass.filter(
          (itm) => !itm?.class?.includes("XI") && !itm?.class?.includes("XII"),
        );
        return data?.map((itm: any) => {
          return { name: itm.class, ...itm };
        });
      }

      return filteredClass?.map((itm: any) => {
        return { name: itm.class, ...itm };
      });
    }
  };

  return (
    <div className="w-full bg-slate-200 py-10 ">
      <div className="w-full md:w-[50%] bg-white rounded-lg  py-3 m-auto space-y-10 divide-y mt-32 divide-gray-900/10">
        <div>
          <div className="px-4 sm:px-0">
            <h2 className="text-5xl text-center my-4 font-semibold  text-gray-900">
              ADMISSION FORM
            </h2>
          </div>
          <form
            onSubmit={handleSubmit(async (data) => {
              if (!file) {
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
                addSubmission(
                  {
                    ...data,
                    admissionFor: admissionForName?.admissionFor,
                    admissionForID: admissionFor,
                    admissionTypeID: formType,
                    admissionType: admissionTypeName?.admissionType,
                    classID: classe,
                    class: className?.class,
                  },
                  file,
                );
              } else {
                addSubmission(
                  {
                    ...data,
                    admissionFor: admissionForName?.admissionFor,
                  },
                  file,
                );
              }

              setLoader(false);
              const templateParams = {
                firstname: data?.firstname,
                lastname: data?.lastname,
                address: data?.address,
                phone: data?.student_phone,
              };

              emailjs
                .send(
                  EMAIL_SERVICE_ID,
                  TEMPLATE_ID,
                  templateParams,
                  "MmzrJ_3ht15WTdj",
                )
                .then(
                  function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                  },
                  function (error) {
                    console.log("FAILED...", error);
                  },
                );
            })}
            className="bg-white shadow-sm ring-1 py-3 ring-gray-900/5 sm:rounded-xl md:col-span-2"
          >
            <div className="w-full flex justify-center ">
              <InputFileUpload setFiles={setFiles} />
            </div>
            <div className="flex flex-wrap justify-evenly">
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
                    label={"Admission type"}
                    list={
                      filteredAdmission && filteredAdmission?.length
                        ? filteredAdmission?.map((itm) => {
                            return { name: itm.admissionType, ...itm };
                          })
                        : []
                    }
                  />
                  <SelectDropdown
                    setValue={setClass}
                    label={"Classes"}
                    list={getClasses() ?? []}
                  />
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
                    <div className="font-semibold">Science Subjects</div>
                    <div className="text-[14px] pl-1 w-32 mt-2">
                      <div className="mb-1">
                        <FormControlLabel
                          onChange={handleChage}
                          value={"BIOLOGY"}
                          control={<Checkbox />}
                          label="BIOLOGY"
                        />
                      </div>
                      <div className="mb-1">
                        <FormControlLabel
                          control={<Checkbox />}
                          onChange={handleChage}
                          value={"COMPUTER"}
                          label="COMPUTER"
                        />
                      </div>
                      <div className="mb-1">
                        <FormControlLabel
                          onChange={handleChage}
                          value={"PHYSICS"}
                          control={<Checkbox />}
                          label="PHYSICS"
                        />
                      </div>
                      <div className="mb-1">
                        <FormControlLabel
                          control={<Checkbox />}
                          label="CHEMISTRY"
                          onChange={handleChage}
                          value={"CHEMISTRY"}
                        />
                      </div>
                      <div className="mb-1">
                        <FormControlLabel
                          control={<Checkbox />}
                          label="MATHEMATICS"
                          onChange={handleChage}
                          value={"MATHEMATICS"}
                        />
                      </div>
                      <div className="mb-1">
                        <FormControlLabel
                          onChange={handleChage}
                          value={"URDU"}
                          control={<Checkbox />}
                          label="URDU"
                        />
                      </div>
                      <div className="mb-1">
                        <FormControlLabel
                          control={<Checkbox />}
                          label="  PAK.STUDIES"
                          onChange={handleChage}
                          value={"PAK.STUDIES"}
                        />
                      </div>
                      <div className="mb-1">
                        <FormControlLabel
                          onChange={handleChage}
                          value={"ENGLISH"}
                          control={<Checkbox />}
                          label="ENGLISH"
                        />
                      </div>
                      <div className="mb-1">
                        <FormControlLabel
                          onChange={handleChage}
                          value={"ISLAMIAT"}
                          control={<Checkbox />}
                          label="ISLAMIAT"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">Commerce Subjects</div>
                    <div className="text-[14px] pl-1 w-48 mt-2">
                      <div className="mb-1">
                        <FormControlLabel
                          control={<Checkbox />}
                          label=" ACCOUNTING"
                        />
                      </div>
                      <div className="mb-1">
                        <FormControlLabel
                          control={<Checkbox />}
                          label=" ECONOMICS"
                        />
                      </div>
                      <div className="mb-1">
                        <FormControlLabel
                          control={<Checkbox />}
                          label=" GEN SCIENCE"
                        />
                      </div>
                      <div className="mb-1">
                        <FormControlLabel
                          control={<Checkbox />}
                          label=" GEN. MATHS"
                        />
                      </div>
                      <div className="mb-1">
                        <FormControlLabel
                          control={<Checkbox />}
                          label=" BUSINESS STUDIES"
                        />
                      </div>
                      <div className="mb-1">
                        <FormControlLabel
                          control={<Checkbox />}
                          label=" URDU"
                        />
                      </div>
                      <div className="mb-1">
                        <FormControlLabel
                          control={<Checkbox />}
                          label=" PAK.STUDIES"
                        />
                      </div>
                      <div className="mb-1">
                        <FormControlLabel
                          control={<Checkbox />}
                          label=" ENGLISH"
                        />
                      </div>
                      <div className="mb-1">
                        <FormControlLabel
                          control={<Checkbox />}
                          label="ISLAMIAT"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="font-semibold">O/A Levels Subjects</div>
                    <div className="text-[14px] pl-1 w-40 mt-2">
                      <div className="mb-1">
                        <FormControlLabel
                          control={<Checkbox />}
                          label="PAK.STUDIES"
                        />
                      </div>
                      <div className="mb-1">
                        <FormControlLabel
                          control={<Checkbox />}
                          label="ISLAMIAT"
                        />
                      </div>
                      <div className="mb-1">
                        <FormControlLabel
                          control={<Checkbox />}
                          label="MATHS"
                        />
                      </div>
                      <div className="mb-1">
                        <FormControlLabel
                          control={<Checkbox />}
                          label="CHEMISTRY"
                        />
                      </div>
                      <div className="mb-1">
                        <FormControlLabel
                          control={<Checkbox />}
                          label="ADD - MATHS"
                        />
                      </div>
                      <div className="mb-1">
                        <FormControlLabel control={<Checkbox />} label="URDU" />
                      </div>
                      <div className="mb-1">
                        <FormControlLabel
                          control={<Checkbox />}
                          label="PHYSICS"
                        />
                      </div>
                      <div className="mb-1">
                        <FormControlLabel
                          control={<Checkbox />}
                          label="ENGLISH"
                        />
                      </div>
                      <div className="mb-1">
                        <FormControlLabel
                          control={<Checkbox />}
                          label="BIOLOGY"
                        />
                      </div>
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
                        label={"Name of last School/Collage *"}
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
                    ✔ If the student's card is lost, he/she will have to pay
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
                    Students Zone will not be responsible for it.
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
              {loading ? (
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

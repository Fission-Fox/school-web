"use client";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useEffect, useState } from "react";
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
export default function Admission() {
  const [formType, setType] = useState("");
  console.log(formType);

  const [classe, setClass] = useState("");
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
  console.log(checkedvalue);

  useEffect(() => {
    const getData = async () => {
      const res: any = await getAdmissionType();
      setAdmissionType(res);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const res: any = await getAdmissionFor();
      setAdmissionfor(res);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const res: any = await getClass();
      Setclass(res);
    };
    getData();
  }, []);

  const filteredClass = Class?.filter(
    (itm) => itm?.admissionTypeID?.includes(formType),
  );
  const filteredAdmission = admissionType?.filter(
    (itm) => itm?.admissionForID?.includes(admissionFor),
  );
  console.log(filteredClass);
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
              console.log({
                ...data,
                admissionFor,
                admissionType: formType,
                class: classe,
              });
              addSubmission({
                ...data,
                admissionFor,
                admissionType: formType,
                class: classe,
              });
            })}
            className="bg-white shadow-sm ring-1 py-3 ring-gray-900/5 sm:rounded-xl md:col-span-2"
          >
            <div className="flex flex-wrap justify-evenly">
              <SelectDropdown
                label={"Admission for"}
                setValue={setAdmissionFor}
                list={admissionfor.map((itm) => {
                  return { name: itm.admissionFor, ...itm };
                })}
              />
              <SelectDropdown
                setValue={setType}
                label={"Admission type"}
                list={filteredAdmission.map((itm) => {
                  return { name: itm.admissionType, ...itm };
                })}
              />
              <SelectDropdown
                setValue={setClass}
                label={"Classes"}
                list={filteredClass.map((itm) => {
                  return { name: itm.class, ...itm };
                })}
              />
            </div>
            {/* <div className="flex justify-center">
                        <Example heading={"Federal / AKU-EB"} list={people3} />
                    </div> */}

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
                    <FormControlLabel control={<Checkbox />} label=" URDU" />
                  </div>
                  <div className="mb-1">
                    <FormControlLabel
                      control={<Checkbox />}
                      label=" PAK.STUDIES"
                    />
                  </div>
                  <div className="mb-1">
                    <FormControlLabel control={<Checkbox />} label=" ENGLISH" />
                  </div>
                  <div className="mb-1">
                    <FormControlLabel control={<Checkbox />} label="ISLAMIAT" />
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
                    <FormControlLabel control={<Checkbox />} label="ISLAMIAT" />
                  </div>
                  <div className="mb-1">
                    <FormControlLabel control={<Checkbox />} label="MATHS" />
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
                    <FormControlLabel control={<Checkbox />} label="PHYSICS" />
                  </div>
                  <div className="mb-1">
                    <FormControlLabel control={<Checkbox />} label="ENGLISH" />
                  </div>
                  <div className="mb-1">
                    <FormControlLabel control={<Checkbox />} label="BIOLOGY" />
                  </div>
                </div>
              </div>
            </div>
            <hr />
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
            <div className="flex items-center justify-center gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
              <button
                type="submit"
                className="rounded-md text-xl bg-indigo-600 px-8 py-4 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>

        {/* <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
                <div className="px-4 sm:px-0">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        We'll always let you know about important changes, but you pick what else you want to hear about.
                    </p>
                </div>

                <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                    <div className="px-4 py-6 sm:p-8">
                        <div className="max-w-2xl space-y-10">
                            <fieldset>
                                <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
                                <div className="mt-6 space-y-6">
                                    <div className="relative flex gap-x-3">
                                        <div className="flex h-6 items-center">
                                            <input
                                                id="comments"
                                                name="comments"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                        </div>
                                        <div className="text-sm leading-6">
                                            <label htmlFor="comments" className="font-medium text-gray-900">
                                                Comments
                                            </label>
                                            <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                                        </div>
                                    </div>
                                    <div className="relative flex gap-x-3">
                                        <div className="flex h-6 items-center">
                                            <input
                                                id="candidates"
                                                name="candidates"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                        </div>
                                        <div className="text-sm leading-6">
                                            <label htmlFor="candidates" className="font-medium text-gray-900">
                                                Candidates
                                            </label>
                                            <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                                        </div>
                                    </div>
                                    <div className="relative flex gap-x-3">
                                        <div className="flex h-6 items-center">
                                            <input
                                                id="offers"
                                                name="offers"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                        </div>
                                        <div className="text-sm leading-6">
                                            <label htmlFor="offers" className="font-medium text-gray-900">
                                                Offers
                                            </label>
                                            <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend className="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
                                <p className="mt-1 text-sm leading-6 text-gray-600">
                                    These are delivered via SMS to your mobile phone.
                                </p>
                                <div className="mt-6 space-y-6">
                                    <div className="flex items-center gap-x-3">
                                        <input
                                            id="push-everything"
                                            name="push-notifications"
                                            type="radio"
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                                            Everything
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-x-3">
                                        <input
                                            id="push-email"
                                            name="push-notifications"
                                            type="radio"
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Same as email
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-x-3">
                                        <input
                                            id="push-nothing"
                                            name="push-notifications"
                                            type="radio"
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                                            No push notifications
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div> */}
      </div>
    </div>
  );
}

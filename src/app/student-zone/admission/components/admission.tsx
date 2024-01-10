"use client";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";
import SelectDropdown from "./dropdown";
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function Admission() {
  const [formType, setType] = useState("");
  const admissionfor = [
    // { name: "Junior zone" },
    { name: "School" },
    { name: "College" },
  ];
  const people = [
    { name: "Federal / AKU-EB" },
    { name: "O & A Levels" },
    { name: "APTITUDE" },
    { name: "OTHERS" },
    // More users...
  ];
  const federal = [
    { name: " IX" },
    { name: "X" },
    { name: " XI" },
    { name: "XII" },
  ];
  const levels = [
    { name: "  O-1" },
    { name: "A’S" },
    { name: " O-Levels" },
    { name: " A-Levels" },
  ];
  const aptitude = [{ name: "  MCAT" }, { name: "BCAT" }, { name: " ECAT" }];
  const classes = [
    { name: "I" },
    { name: "II" },
    { name: "III" },
    { name: " IV" },
    { name: " V" },
    { name: "VI" },
    { name: "VII" },
    { name: " VIII " },
    { name: " IX" },
    { name: "X" },
    { name: " XI" },
    { name: "XII" },
  ];
  const getCurrentList = () => {
    switch (formType) {
      case "Federal / AKU-EB":
        return federal;
      case "O & A Levels":
        return levels;
      case "APTITUDE":
        return aptitude;
      default:
        return classes;
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

          <form className="bg-white shadow-sm ring-1 py-3 ring-gray-900/5 sm:rounded-xl md:col-span-2">
            <div className="flex flex-wrap justify-evenly">
              <SelectDropdown label={"Admission for"} list={admissionfor} />
              <SelectDropdown
                setValue={setType}
                label={"Admission type"}
                list={people}
              />
              <SelectDropdown label={"Classes"} list={getCurrentList()} />
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
                      control={<Checkbox defaultChecked />}
                      label="BIOLOGY"
                    />
                  </div>
                  <div className="mb-1">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="  COMPUTER"
                    />
                  </div>
                  <div className="mb-1">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="PHYSICS"
                    />
                  </div>
                  <div className="mb-1">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="CHEMISTRY"
                    />
                  </div>
                  <div className="mb-1">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="MATHEMATICS"
                    />
                  </div>
                  <div className="mb-1">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="URDU"
                    />
                  </div>
                  <div className="mb-1">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="  PAK.STUDIES"
                    />
                  </div>
                  <div className="mb-1">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="ENGLISH"
                    />
                  </div>
                  <div className="mb-1">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
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
                      control={<Checkbox defaultChecked />}
                      label=" ACCOUNTING"
                    />
                  </div>
                  <div className="mb-1">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label=" ECONOMICS"
                    />
                  </div>
                  <div className="mb-1">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label=" GEN SCIENCE"
                    />
                  </div>
                  <div className="mb-1">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label=" GEN. MATHS"
                    />
                  </div>
                  <div className="mb-1">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label=" BUSINESS STUDIES"
                    />
                  </div>
                  <div className="mb-1">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label=" URDU"
                    />
                  </div>
                  <div className="mb-1">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label=" PAK.STUDIES"
                    />
                  </div>
                  <div className="mb-1">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label=" ENGLISH"
                    />
                  </div>
                  <div className="mb-1">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
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
                      control={<Checkbox defaultChecked />}
                      label="PAK.STUDIES"
                    />
                  </div>
                  <div className="mb-1">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="ISLAMIAT"
                    />
                  </div>
                  <div className="mb-1">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="MATHS"
                    />
                  </div>
                  <div className="mb-1">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="CHEMISTRY"
                    />
                  </div>
                  <div className="mb-1">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="ADD - MATHS"
                    />
                  </div>
                  <div className="mb-1">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="URDU"
                    />
                  </div>
                  <div className="mb-1">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="PHYSICS"
                    />
                  </div>
                  <div className="mb-1">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="ENGLISH"
                    />
                  </div>
                  <div className="mb-1">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="BIOLOGY"
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="px-4 py-6 sm:p-8">
              <div className="grid max-w-full grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    S/o. D/o
                  </label>
                  <div className="mt-2">
                    <input
                      id="text"
                      name="text"
                      type="text"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Place of Birth
                  </label>
                  <div className="mt-2">
                    <input
                      id="text"
                      name="text"
                      type="text"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Region
                  </label>
                  <div className="mt-2">
                    <input
                      id="text"
                      name="text"
                      type="text"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Father’s Occupation
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium leading-6 pl-3 text-gray-900"
                  >
                    Father’s Cell#
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="region"
                      id="region"
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Mother’s Cell #
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      autoComplete="postal-code"
                      className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Address
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Student’s Cell
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone #
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="region"
                      id="region"
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name Of Present School/College
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    D.O.B
                  </label>
                  <div className="mt-2">
                    <input
                      type="date"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Parent’s Email ID
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Student’s Email ID
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="region"
                      id="region"
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Relation
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      autoComplete="postal-code"
                      className="block w-full rounded-md pl-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
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

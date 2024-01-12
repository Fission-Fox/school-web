// "use client";
// import { Combobox } from "@headlessui/react";
// import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
// import {
//   JSXElementConstructor,
//   PromiseLikeOfReactNode,
//   ReactElement,
//   ReactNode,
//   ReactPortal,
//   SetStateAction,
//   useState
// } from "react";

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }
// // const heading = [{
// //   head: "Federal / AKU-EB"
// // },
// // {
// //   head: "O & A Levels"
// // },
// // {
// //   head: "APTITUDE"
// // }
// // ]
// type Prop = {
//   list: any;
//   heading: any;
// };
// export default function Dropdown({ list, heading }: Prop) {
//   const [query, setQuery] = useState("");
//   const [selectedPerson, setSelectedPerson] = useState(null);

//   const filteredPeople =
//     query === ""
//       ? list
//       : list.filter((person: { name: string }) => {
//         return person.name.toLowerCase().includes(query.toLowerCase());
//       });
//   return (
//     <Combobox as="div" value={selectedPerson} onChange={setSelectedPerson}>
//       <Combobox.Label className="block text-sm font-medium leading-6 text-gray-900">
//         {heading}
//       </Combobox.Label>
//       <div className="relative flex justify-evenly mt-2 w-[200px]">
//         <Combobox.Button className="w-[200px] absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//           <Combobox.Input
//             aria-disabled
//             className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//             onChange={(event: { target: { value: SetStateAction<string> } }) =>
//               setQuery(event.target.value)
//             }
//             displayValue={(person: { name: any }) => person?.name}
//           />

//           <ChevronUpDownIcon
//             className="h-5 w-5 text-gray-400"
//             aria-hidden="true"
//           />
//         </Combobox.Button>

//         {filteredPeople.length > 0 && (
//           <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//             {filteredPeople.map(
//               (person: {
//                 name:
//                 | string
//                 | number
//                 | boolean
//                 | ReactElement<any, string | JSXElementConstructor<any>>
//                 | Iterable<ReactNode>
//                 | ReactPortal
//                 | PromiseLikeOfReactNode
//                 | null
//                 | undefined;
//               }) => (
//                 <Combobox.Option
//                   // key={person.username}
//                   value={person}
//                   className={({ active }: any) =>
//                     classNames(
//                       "relative cursor-default select-none py-2 pl-3 pr-9",
//                       active ? "bg-indigo-600 text-white" : "text-gray-900",
//                     )
//                   }
//                 >
//                   {({ active, selected }: any) => (
//                     <>
//                       <div className="flex">
//                         <span
//                           className={classNames(
//                             "truncate",
//                             selected && "font-semibold",
//                           )}
//                         >
//                           {person.name}
//                         </span>
//                         <span
//                           className={classNames(
//                             "ml-2 truncate text-gray-500",
//                             active ? "text-indigo-200" : "text-gray-500",
//                           )}
//                         >
//                           {/* {person.username} */}
//                         </span>
//                       </div>

//                       {selected && (
//                         <span
//                           className={classNames(
//                             "absolute inset-y-0 right-0 flex items-center pr-4",
//                             active ? "text-white" : "text-indigo-600",
//                           )}
//                         >
//                           <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                         </span>
//                       )}
//                     </>
//                   )}
//                 </Combobox.Option>
//               ),
//             )}
//           </Combobox.Options>
//         )}
//       </div>
//     </Combobox>
//   );
// }

import { InputLabel } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";

type Prop = {
  list: any;
  label: string;
  setValue?: any;
};
export default function SelectDropdown({ list, label, setValue }: Prop) {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
    if (setValue) setValue(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
          label={label}
        >
          {list.map((item: any) => {
            return (
              <MenuItem key={item.name} value={item?.id}>
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

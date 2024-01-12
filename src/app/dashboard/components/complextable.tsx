import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import More from "./more";

function createData(
  name: string,
  calories: string,
  fat: string,
  carbs: string,
) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData("Horizan UI Pro", "Approved", "18-Apr-2021", "17.5(%)"),
  createData("Horizan UI Free", "Disable", "18-Apr-2021", "10.8(%)"),
  createData("Weekly Update", "Approved", "12-JUL-2021", "21.3(%)"),

  createData("Marketplace", "Error", "20-May-2021", "12.2%"),
];

export default function Complextable() {
  return (
    <TableContainer
      component={Paper}
      className="!w-[800px] !h-[345px] !rounded-3xl"
    >
      <div className="flex justify-between pl-3 pr-3 pt-3">
        <div className="text-[#2B3674]">Complex Table</div>
        <div>
          {" "}
          <More />
        </div>
      </div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Progress</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

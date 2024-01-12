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
  createData("Horizan UI Pro", "17.5(%)", "2.458", "24-Jan-2021"),
  createData("Horizan UI Free", "10.8(%)", "1.485", "12-Jun-2021"),
  createData("Weekly Update", "21.3(%)", "1.024", "5-Jan(-)2021"),
  createData("Venus 3d Asset", "31.5(%)", "858", "7-March-2021"),
  createData("Marketplace", "12.2%", "258", "17-Dec-2021"),
];

export default function BasicTable() {
  return (
    <TableContainer
      component={Paper}
      className="!w-[800px] h-[345px]  !rounded-3xl"
    >
      <div className="flex justify-between pl-3 pr-3 pt-3">
        <div>Check Table</div>
        <div>
          <More />
        </div>
      </div>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Progress</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {" "}
                <input type="checkbox" />
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

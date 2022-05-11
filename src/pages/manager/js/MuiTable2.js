import "../css/manager.css";
import "../../../utils/style.css";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button } from "react-scroll/modules";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

// const columns = [
//   { id: "name", label: "ردیف", minWidth: 100 },
//   { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
//   {
//     id: "population",
//     label: "Population",
//     minWidth: 100,
//     align: "right",
//     format: (value) => value.toLocaleString("en-US"),
//   },
//   {
//     id: "size",
//     label: "Size\u00a0(km\u00b2)",
//     minWidth: 100,
//     align: "right",
//     format: (value) => value.toLocaleString("en-US"),
//   },
//   {
//     id: "density",
//     label: "Density",
//     minWidth: 100,
//     align: "right",
//     format: (value) => value.toFixed(2),
//   },
//   {
//     id: "density",
//     label: "Density",
//     minWidth: 100,
//     align: "right",
//     format: (value) => value.toFixed(2),
//   },
// ];

function createData(name, calories, fat, carbs, protein, test) {
  return { name, calories, fat, carbs, protein, test };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 33),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 33),
  createData("Eclair", 262, 16.0, 24, 6.0, 33),
  createData("Cupcake", 305, 3.7, 67, 4.3, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 33),
];

export default function MuiTable2() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="table-container">
      <Paper
        className="table-wrapper"
        sx={{ width: "98%", overflow: "hidden" }}
      >
        <TableContainer sx={{ height: "80%" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="right">
                  <p className="typography-regular-sans product-tabel-title">
                    ردیف
                  </p>
                </TableCell>
                <TableCell align="right">
                  <p className="typography-regular-sans product-tabel-title">
                    ردیف
                  </p>
                </TableCell>
                <TableCell align="right">
                  <p className="typography-regular-sans product-tabel-title">
                    ردیف
                  </p>
                </TableCell>
                <TableCell align="right">
                  <p className="typography-regular-sans product-tabel-title">
                    ردیف
                  </p>
                </TableCell>
                <TableCell align="right">
                  <p className="typography-regular-sans product-tabel-title">
                    ردیف
                  </p>
                </TableCell>
                <TableCell align="right">
                  <p className="typography-regular-sans product-tabel-title">
                    ردیف
                  </p>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow
                  className="table-row"
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right" component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                  <TableCell align="right">
                    <div>
                      <button className="table-btn">
                        <ModeEditIcon />
                      </button>
                      <button className="table-btn">
                        <DeleteIcon />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

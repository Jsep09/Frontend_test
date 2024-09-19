import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Employee } from "../../interface/Employee";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

interface EmployeeListProps {
  employee: Employee[];
}

const StyledTableCell = styled(TableCell)(({}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#0e6ace",
    color: "white",
    fontWeight: "bolder",
  },
}));

const EmployeeList: React.FC<EmployeeListProps> = ({ employee }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <TableContainer component={Paper} sx={{ mt: 5, overflowX: "auto" }}>
      <Table
        sx={{ minWidth: isSmallScreen ? 300 : 650 }}
        aria-label="employee table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            {!isSmallScreen && (
              <StyledTableCell align="right">Lastname</StyledTableCell>
            )}
            {!isSmallScreen && (
              <StyledTableCell align="right">Department</StyledTableCell>
            )}
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employee.map((employee) => (
            <TableRow
              key={employee.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {employee.first_name}
              </TableCell>
              <TableCell align="right">{employee.last_name}</TableCell>
              {!isSmallScreen && (
                <TableCell align="right">{employee.email}</TableCell>
              )}
              {!isSmallScreen && (
                <TableCell align="right">{employee.department}</TableCell>
              )}
              <TableCell align="right">
                <Link
                  to={`/detail/${employee.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="outlined"
                    size={isSmallScreen ? "small" : "medium"}
                  >
                    Detailed
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeList;

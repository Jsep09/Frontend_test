import * as React from "react";
import fetchEmployee from "../service/FetchData";
import EmployeeList from "../components/Employee";
import { Employee } from "../interface/Employee";
import Search from "../components/Search";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ResponsiveAppBar from "../components/appbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const DashBoard = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    const modalShow = localStorage.getItem("modalShow");
    if (!modalShow) {
      handleOpen();
      localStorage.setItem("modalShow", "true");
    }
  }, []);

  const [employee, setEmployee] = React.useState<Employee[]>([]);
  const [filterEmployee, setFilterEmployee] = React.useState<Employee[]>([]);
  const [filterDepartment, setFilterDepartment] = React.useState<string>("");
  const [searchText, setSearch] = React.useState("");

  React.useEffect(() => {
    const getEmployees = async () => {
      const data = await fetchEmployee();
      if (data) {
        setEmployee(data);
        setFilterEmployee(data);
      }
    };
    getEmployees();
  }, []);

  React.useEffect(() => {
    const filter = employee.filter((employee) => {
      const matchesDepartment =
        filterDepartment && filterDepartment !== "All"
          ? employee.department === filterDepartment
          : true;
      const matchesSearchText = searchText
        ? employee.first_name
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          employee.last_name.toLowerCase().includes(searchText.toLowerCase()) ||
          employee.email.toLowerCase().includes(searchText.toLowerCase())
        : true;
      return matchesDepartment && matchesSearchText;
    });
    setFilterEmployee(filter);
  }, [filterDepartment, searchText]);

  const handelFilterChange = (department: string, searchText: string) => {
    setFilterDepartment(department);
    setSearch(searchText);
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isSmallScreen ? 300 : 400,
    bgcolor: "background.paper",
    boxShadow: 15,
    p: isSmallScreen ? 2 : 4,
  };

  return (
    <>
      <ResponsiveAppBar />
      <Container maxWidth="xl">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          closeAfterTransition
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Hello & Welcome 😄
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              I feel very satisfied You visit this test <br />
              Let's explore !!
            </Typography>
          </Box>
        </Modal>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant={isSmallScreen ? "h4" : "h2"}
            component="h2"
            mt={3}
            sx={{ padding: isSmallScreen ? "10px 0" : "20px 0" }}
          >
            Employee Management
          </Typography>
        </Box>
        {/* Filter & Search */}
        <Search onFilterChange={handelFilterChange} />

        {/* Employee component */}
        <EmployeeList employee={filterEmployee} />
      </Container>
    </>
  );
};

export default DashBoard;

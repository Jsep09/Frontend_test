import { useParams, useNavigate } from "react-router-dom";
import { Employee } from "../interface/Employee";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { useState, useEffect } from "react";
import { Box, Card, CardContent, Typography, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [employeeDetail, setEmployeeDetail] = useState<Employee | null>(null);

  useEffect(() => {
    const fetchEmployeeDetail = async () => {
      try {
        const response = await fetch(`http://localhost:8000/employees/${id}`);
        if (response.ok) {
          const data: Employee = await response.json();
          setEmployeeDetail(data);
        } else {
          console.error("Failed to fetch employee data");
        }
      } catch (error) {
        console.error("Error fetching employee:", error);
      }
    };
    fetchEmployeeDetail();
  }, [id]);

  const responsiveTypography = {
    fontSize: {
      xs: "0.875rem",
      sm: "1rem",
      md: "1.125rem",
    },
  };

  return (
    <div style={{ backgroundColor: "#dce6f4" }}>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            mb: 2,
            position: "absolute",
            top: 16,
            left: 16,
          }}
        >
          <IconButton onClick={() => navigate("/dashboard")} color="primary">
            <ChevronLeftIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            mb: 2,
          }}
        ></Box>
        <Card
          sx={{
            width: "100%",
            maxWidth: 600,
            padding: 2,
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: 2,
            }}
          >
            <Avatar
              alt={employeeDetail?.first_name}
              src="#"
              sx={{
                width: { xs: 80, sm: 100 },
                height: { xs: 80, sm: 100 },
              }}
            />
          </Box>
          <CardContent>
            {employeeDetail ? (
              <>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    textAlign: "center",
                    fontSize: {
                      xs: "1.5rem",
                      sm: "2rem",
                      md: "2.25rem",
                    },
                  }}
                >
                  {employeeDetail.first_name} {employeeDetail.last_name}
                </Typography>
                <Typography variant="body1" sx={responsiveTypography}>
                  Age: {employeeDetail.age}
                </Typography>
                <Typography variant="body1" sx={responsiveTypography}>
                  Email: {employeeDetail.email}
                </Typography>
                <Typography variant="body1" sx={responsiveTypography}>
                  Gender: {employeeDetail.gender}
                </Typography>
                <Typography variant="body1" sx={responsiveTypography}>
                  Job Title: {employeeDetail.job_title}
                </Typography>
                <Typography variant="body1" sx={responsiveTypography}>
                  Salary: ${employeeDetail.salary}
                </Typography>
                <Typography variant="body1" sx={responsiveTypography}>
                  Hire Date: {employeeDetail.hire_date}
                </Typography>
                <Typography variant="body1" sx={responsiveTypography}>
                  Department: {employeeDetail.department}
                </Typography>
              </>
            ) : (
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Loading employee details...
              </Typography>
            )}
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Details;

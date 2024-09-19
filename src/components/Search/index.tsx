import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface SearchProps {
  onFilterChange: (department: string, searchText: string) => void;
}

const Search: React.FC<SearchProps> = ({ onFilterChange }) => {
  const [department, setDepartment] = React.useState("");
  const [searchText, setSearchText] = React.useState("");
  const [filter, setFilter] = React.useState("");

  const handleDepartment = (e: SelectChangeEvent) => {
    const value = e.target.value;
    setFilter(value);
    setDepartment(value);
    onFilterChange(value, searchText);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
    onFilterChange(department, value);
  };

  // Responsive handling
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ mt: 2, flexGrow: 1 }}>
      <Grid container spacing={isSmallScreen ? 2 : 1} alignItems="center">
        <Grid item xs={12} sm={4}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="department-select-label">Department</InputLabel>
              <Select
                labelId="department-select-label"
                id="department-select"
                value={filter}
                label="Department"
                onChange={handleDepartment}
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Marketing">Marketing</MenuItem>
                <MenuItem value="Sales">Sales</MenuItem>
                <MenuItem value="HR">HR</MenuItem>
                <MenuItem value="IT">IT</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>

        <Grid item xs={12} sm={8}>
          <Box
            component="form"
            sx={{ "& > :not(style)": { width: "100%" } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              onChange={handleSearch}
              fullWidth
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Search;

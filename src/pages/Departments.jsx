import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Typography,
  Avatar,
  Stack
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";

const rowsPerPage = 3;

const initialDepartments = [
  { id: 1, name: "Computer Science (B.Sc)", institute: "Darshan Institute of Computer Application", head: "Dr. Krunal", students: 50 },
  { id: 2, name: "Mechanical Engineering", institute: "Darshan Institute of Engineering and Technology", head: "Dr. Aniket", students: 100 },
  { id: 3, name: "Civil Engineering", institute: "Darshan Institute of Engineering and Technology", head: "Dr. Rahul", students: 80 },
  { id: 4, name: "Bachelor of Business Administration (BBA)", institute: "Darshan Institute of Management", head: "Dr. Iyer", students: 90 },
  { id: 5, name: "Bachelor of Commerce (B.Com)", institute: "Darshan Institute of Management", head: "Prof. Nair", students: 70 },
];

export default function Departments() {
  const [departments, setDepartments] = useState(initialDepartments);
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    institute: "",
    head: "",
    students: ""
  });

  const totalPages = Math.ceil(departments.length / rowsPerPage);

  const paginatedData = departments.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddDepartment = () => {
    setDepartments([
      ...departments,
      { id: departments.length + 1, ...form }
    ]);
    setForm({ name: "", institute: "", head: "", students: "" });
    setOpen(false);
    setPage(totalPages);
  };

  return (
    <Box p={4}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" mb={3}>
        <Box>
          <Typography variant="h5" fontWeight={600}>
            Departments Management
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Manage all university departments and heads
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setOpen(true)}
        >
          Add Department
        </Button>
      </Box>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Department Name</TableCell>
              <TableCell>Institute</TableCell>
              <TableCell>Head of Dept</TableCell>
              <TableCell align="center">Students</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedData.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell>{row.id}</TableCell>

                <TableCell>
                  <Typography fontWeight={600}>{row.name}</Typography>
                </TableCell>

                <TableCell>{row.institute}</TableCell>

                <TableCell>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Avatar sx={{ width: 28, height: 28 }}>
                      <PersonIcon fontSize="small" />
                    </Avatar>
                    <Typography variant="body2">{row.head}</Typography>
                  </Stack>
                </TableCell>

                <TableCell align="center">
                  {row.students}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination (Events Style) */}
      <Box display="flex" alignItems="center" gap={2} mt={3}>
        <Button
          variant="outlined"
          size="small"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </Button>

        <Typography variant="body2">
          Page {page} of {totalPages}
        </Typography>

        <Button
          variant="outlined"
          size="small"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </Box>

      {/* Add Department Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>Add Department</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="dense"
            label="Department Name"
            placeholder="eg. Computer Science"
            name="name"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Institute"
            placeholder="eg. Oxford University"
            name="institute"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Head of Department"
            placeholder="eg. Prof. Donald Trump"
            name="head"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Students"
            placeholder="eg. 150"
            type="number"
            name="students"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleAddDepartment}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

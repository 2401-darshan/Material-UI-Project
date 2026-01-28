import React, { useState } from "react";
import {
  Box, Button,
  Dialog, DialogTitle, DialogContent, DialogActions,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, TextField, Typography
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const rowsPerPage = 3;

const initialInstitutes = [
  { id: 1, name: "ABC Institute of Technology", location: "A-Block", type: "Engineering", established: 1995 },
  { id: 2, name: "XYZ Institute of Science", location: "G-Block", type: "Science", established: 2001 },
  { id: 3, name: "PQR College of Arts", location: "C-Block", type: "Arts", established: 1998 },
  { id: 4, name: "LMN Institute of Commerce", location: "B-Block", type: "Commerce", established: 2005 },
  { id: 5, name: "DEF University", location: "D-Block", type: "University", established: 1980 }
];

export default function Institutes() {
  const [institutes, setInstitutes] = useState(initialInstitutes);
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    location: "",
    type: "",
    established: ""
  });

  const totalPages = Math.ceil(institutes.length / rowsPerPage);

  const paginatedData = institutes.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddInstitute = () => {
    setInstitutes([...institutes, { id: institutes.length + 1, ...form }]);
    setForm({ name: "", location: "", type: "", established: "" });
    setOpen(false);
    setPage(totalPages);
  };

  return (
    <Box p={4}>
      {/* Header with Add Button */}
      <Box display="flex" justifyContent="space-between" mb={3}>
        <Typography variant="h5" fontWeight={600}>
          Institutes
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => setOpen(true)}>
          Add Institute
        </Button>
      </Box>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Established</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.location}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.established}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination (Events Style) */}
            <Box display="flex" alignItems="center" gap={2} mt={3}>
              <Button variant="outlined" size="small" disabled={page === 1} onClick={() => setPage(page - 1)}>
                Prev
              </Button>
      
              <Typography variant="body2">
                Page {page} of {totalPages}
              </Typography>
      
              <Button variant="outlined" size="small" disabled={page === totalPages} onClick={() => setPage(page + 1)}>
                Next
              </Button>
            </Box>

      {/* Add Institute Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>Add Institute</DialogTitle>
        <DialogContent>
          <TextField fullWidth margin="dense" label="Institute Name" placeholder="eg. Darshan Institute of Engineering" name="name" onChange={handleChange} />
          <TextField fullWidth margin="dense" label="Location" placeholder="eg. Rajkot" name="location" onChange={handleChange} />
          <TextField fullWidth margin="dense" label="Type" placeholder="eg. University" name="type" onChange={handleChange} />
          <TextField fullWidth margin="dense" label="Established Year" placeholder="eg. 1980" type="number" name="established" onChange={handleChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleAddInstitute}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

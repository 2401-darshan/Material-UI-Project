import React, { useState } from "react";
import {
  Box, Button,
  Dialog, DialogTitle, DialogContent, DialogActions,
  Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow,
  Paper, TextField, Typography
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

const rowsPerPage = 3;

const initialEvents = [
  { id: 1, name: "Tech Fest", date: "2026-02-10", location: "Mumbai", type: "Conference" },
  { id: 2, name: "Hackathon", date: "2026-03-05", location: "Pune", type: "Competition" },
  { id: 3, name: "Workshop", date: "2026-04-15", location: "Delhi", type: "Workshop" },
  { id: 4, name: "Code-A-Thon", date: "2026-04-15", location: "Rajkot", type: "Competition" },
  { id: 5, name: "Book Talk", date: "2026-04-15", location: "Rajkot", type: "Conference" }
];

export default function Events() {
  const [events, setEvents] = useState(initialEvents);
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    date: "",
    location: "",
    type: ""
  });

  const totalPages = Math.ceil(events.length / rowsPerPage);

  const paginatedData = events.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddEvent = () => {
    setEvents([...events, { id: events.length + 1, ...form }]);
    setForm({ name: "", date: "", location: "", type: "" });
    setOpen(false);
    setPage(totalPages);
  };

  return (
    <Box p={4}>
      {/* Header with Add Button */}
      <Box display="flex" justifyContent="space-between" mb={3}>
        <Box>
          <Typography variant="h5" fontWeight={600}>
            Events Management
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Manage all university events and details
          </Typography>
        </Box>
        
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => setOpen(true)}>
          Add Event
        </Button>
      </Box>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Event Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.location}</TableCell>
                <TableCell>{row.type}</TableCell>
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

      {/* Add Event Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>Add Event</DialogTitle>
        <DialogContent>
          <TextField fullWidth margin="dense" label="Event Name" placeholder="eg. Tech Fest" name="name" onChange={handleChange} />
          <TextField fullWidth margin="dense" type="date" name="date" onChange={handleChange} InputLabelProps={{ shrink: true }} />
          <TextField fullWidth margin="dense" label="Location" placeholder="eg. California" name="location" onChange={handleChange} />
          <TextField fullWidth margin="dense" label="Type" placeholder="eg. Competition" name="type" onChange={handleChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleAddEvent}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

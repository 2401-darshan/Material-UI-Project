import React, { useState } from "react";


const Table = ({ data, columns }) => (
  <table
    border="1"
    cellPadding="10"
    width="100%"
    style={{ borderCollapse: "collapse" }}
  >
    <thead>
      <tr>
        {columns.map(col => (
          <th key={col.key}>{col.label}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map(item => (
        <tr key={item.id}>
          {columns.map(col => (
            <td key={col.key}>{item[col.key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);


const Modal = ({ open, onClose, onSave }) => {
  const [form, setForm] = useState({
    name: "",
    date: "",
    location: "",
    type: ""
  });

  if (!open) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h3>Add Event</h3>

        <input
          placeholder="Event Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="date"
          value={form.date}
          onChange={e => setForm({ ...form, date: e.target.value })}
        />

        <input
          placeholder="Location"
          value={form.location}
          onChange={e => setForm({ ...form, location: e.target.value })}
        />

        
        <select
          value={form.type}
          onChange={e => setForm({ ...form, type: e.target.value })}
        >
          <option value="">Select Type</option>
          <option value="Conference">Conference</option>
          <option value="Workshop">Workshop</option>
          <option value="Competition">Competition</option>
        </select>

        <div style={{ marginTop: 10 }}>
          <button onClick={() => onSave(form)}>Save</button>
          <button onClick={onClose} style={{ marginLeft: 10 }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};


const Toast = ({ message }) => (
  <div style={styles.toast}>{message}</div>
);


const Events = () => {
  const [events, setEvents] = useState([
    { id: 1, name: "Tech Fest", date: "2026-02-10", location: "Mumbai", type: "Conference" },
    { id: 2, name: "Hackathon", date: "2026-03-05", location: "Pune", type: "Competition" },
    { id: 3, name: "AI Workshop", date: "2026-04-15", location: "Delhi", type: "Workshop" }
  ]);

  const [openModal, setOpenModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  
  const itemsPerPage = 2;
  const [page, setPage] = useState(1);

  const start = (page - 1) * itemsPerPage;
  const paginatedData = events.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(events.length / itemsPerPage);

  const columns = [
    { label: "ID", key: "id" },
    { label: "Event Name", key: "name" },
    { label: "Date", key: "date" },
    { label: "Location", key: "location" },
    { label: "Type", key: "type" }
  ];

  const handleSave = (formData) => {
    setLoading(true);

    setTimeout(() => {
      setEvents([
        ...events,
        { id: events.length + 1, ...formData }
      ]);

      setLoading(false);
      setOpenModal(false);
      setShowToast(true);

      setTimeout(() => setShowToast(false), 3000);
    }, 1000);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Events List</h2>

      <button onClick={() => setOpenModal(true)}>
        + Add Event
      </button>

      <br /><br />

      {loading && <p>Loading...</p>}

      <Table data={paginatedData} columns={columns} />

      
      <div style={{ marginTop: 10 }}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <span style={{ margin: "0 10px" }}>
          Page {page} of {totalPages}
        </span>
        <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSave={handleSave}
      />

      {showToast && <Toast message="Event added successfully!" />}
    </div>
  );
};


const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "black"
  },
  modal: {
    background: "white",
    padding: 20,
    width: 320,
    margin: "100px auto",
    display: "flex",
    flexDirection: "column",
    gap: 10
  },
  toast: {
    position: "fixed",
    top: 20,
    right: 20,
    background: "green",
    color: "white",
    padding: "10px 20px"
  }
};

export default Events;

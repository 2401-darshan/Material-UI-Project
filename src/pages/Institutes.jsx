import React, { useState } from "react";


const Table = ({ data, columns }) => {
  return (
    <table
      border="1"
      cellPadding="10"
      style={{ borderCollapse: "collapse", width: "100%" }}
    >
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {columns.map((col) => (
              <td key={col.key}>{item[col.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};


const Modal = ({ open, onClose, onSave }) => {
  const [form, setForm] = useState({
    name: "",
    location: "",
    type: "",
    established: ""
  });

  if (!open) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h3>Add Institute</h3>

        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />

       
        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        >
          <option value="">Select Type</option>
          <option value="Engineering">Engineering</option>
          <option value="Science">Science</option>
          <option value="Management">Management</option>
        </select>

        <input
          placeholder="Established Year"
          value={form.established}
          onChange={(e) => setForm({ ...form, established: e.target.value })}
        />

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


const Toast = ({ message }) => {
  return (
    <div style={styles.toast}>
      {message}
    </div>
  );
};


const Institutes = () => {
  const [data, setData] = useState([
    { id: 1, name: "ABC Institute of Technology", location: "A-Block", type: "Engineering", established: 1995 },
    { id: 2, name: "XYZ Institute of Science", location: "G-Block", type: "Science", established: 2001 },
    { id: 3, name: "PQR Institute", location: "H-Block", type: "Management", established: 2005 }
  ]);

  const [openModal, setOpenModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  
  const itemsPerPage = 2;
  const [page, setPage] = useState(1);

  const start = (page - 1) * itemsPerPage;
  const paginatedData = data.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const columns = [
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Location", key: "location" },
    { label: "Type", key: "type" },
    { label: "Established", key: "established" }
  ];

  const handleSave = (formData) => {
    setLoading(true);

    setTimeout(() => {
      setData([
        ...data,
        { id: data.length + 1, ...formData }
      ]);

      setLoading(false);
      setOpenModal(false);
      setShowToast(true);

      setTimeout(() => setShowToast(false), 3000);
    }, 1000);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Institutes List</h2>

      <button onClick={() => setOpenModal(true)}>
        Add Institute
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

      {showToast && <Toast message="Institute added successfully!" />}
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
    width: 300,
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

export default Institutes;

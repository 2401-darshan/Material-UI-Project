import React, { useState } from "react";


const Table = ({ data, columns }) => (
  <table
    border="1"
    cellPadding="10"
    style={{ borderCollapse: "collapse", width: "100%" }}
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
    institute: "",
    head: "",
    students: ""
  });

  if (!open) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h3>Add Department</h3>

        <input
          placeholder="Department Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Institute"
          value={form.institute}
          onChange={e => setForm({ ...form, institute: e.target.value })}
        />

        <input
          placeholder="Head of Department"
          value={form.head}
          onChange={e => setForm({ ...form, head: e.target.value })}
        />

        <input
          placeholder="Total Students"
          type="number"
          value={form.students}
          onChange={e => setForm({ ...form, students: e.target.value })}
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


const Toast = ({ message }) => (
  <div style={styles.toast}>{message}</div>
);


const Departments = () => {
  const [departments, setDepartments] = useState([
    { id: 1, name: "Computer Science", institute: "ABC Institute of Technology", head: "Dr. Sharma", students: 120 },
    { id: 2, name: "Mechanical Engineering", institute: "ABC Institute of Technology", head: "Dr. Verma", students: 100 },
    { id: 3, name: "Physics", institute: "XYZ Institute of Science", head: "Dr. Gupta", students: 80 },
    { id: 4, name: "Mathematics", institute: "XYZ Institute of Science", head: "Dr. Iyer", students: 90 },
    { id: 5, name: "Arts", institute: "PQR College of Arts", head: "Prof. Nair", students: 70 },
    { id: 6, name: "Management", institute: "GHI Institute of Management", head: "Dr. Reddy", students: 150 },
   
  ]);

  const [openModal, setOpenModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

 
  const itemsPerPage = 3;
  const [page, setPage] = useState(1);

  const start = (page - 1) * itemsPerPage;
  const paginatedData = departments.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(departments.length / itemsPerPage);

  const columns = [
    { label: "ID", key: "id" },
    { label: "Department Name", key: "name" },
    { label: "Institute", key: "institute" },
    { label: "Head", key: "head" },
    { label: "Students", key: "students" }
  ];

  const handleSave = (formData) => {
    setDepartments([
      ...departments,
      { id: departments.length + 1, ...formData }
    ]);
    setOpenModal(false);
    setShowToast(true);

    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Departments List</h2>

      <button onClick={() => setOpenModal(true)}>
        + Add Department
      </button>

      <br /><br />

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

      {showToast && <Toast message="Department added successfully!" />}
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

export default Departments;

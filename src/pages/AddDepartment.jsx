// DepartmentLogic.jsx
import React, { useState } from "react";
import DepartmentUI from "./DepartmentUI";

const AddDepartment = () => {

  const [departments, setDepartments] = useState([
    { id: 1, name: "Computer Science", institute: "ABC Institute", head: "Dr. Sharma", students: 120 },
    { id: 2, name: "Mechanical", institute: "ABC Institute", head: "Dr. Verma", students: 100 },
    { id: 3, name: "Physics", institute: "XYZ Institute", head: "Dr. Gupta", students: 80 },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({ name: "", institute: "", head: "", students: "" });

  // Pagination
  const itemsPerPage = 3;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(departments.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const paginatedData = departments.slice(start, start + itemsPerPage);

  // Handlers
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setDepartments([...departments, { id: departments.length + 1, ...form }]);
    setForm({ name: "", institute: "", head: "", students: "" });
    setIsModalOpen(false);
  };

  return (
    <DepartmentUI
      departments={departments}
      paginatedData={paginatedData}
      page={page}
      totalPages={totalPages}
      onPrev={() => setPage(p => p - 1)}
      onNext={() => setPage(p => p + 1)}
      onAddClick={() => setIsModalOpen(true)}
      isModalOpen={isModalOpen}
      onCloseModal={() => setIsModalOpen(false)}
      form={form}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
};

export default AddDepartment;

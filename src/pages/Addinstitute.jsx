import React, { useState } from "react";

const AddInstitute = () => {
  const [form, setForm] = useState({
    name: "",
    location: "",
    type: "",
    established: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Institute Added:", form);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Institute</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input name="name" value={form.name} onChange={handleChange} />
        </div>

        <div>
          <label>Location:</label><br />
          <input name="location" value={form.location} onChange={handleChange} />
        </div>

        <div>
          <label>Type:</label><br />
          <input name="type" value={form.type} onChange={handleChange} />
        </div>

        <div>
          <label>Established Year:</label><br />
          <input
            name="established"
            type="number"
            value={form.established}
            onChange={handleChange}
          />
        </div>

        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddInstitute;

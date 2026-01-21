import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEvent = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    date: "",
    location: "",
    type: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event Added:", form);
    navigate("/events");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Add Event</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Event Name" onChange={handleChange} required /><br /><br />
        <input type="date" name="date" onChange={handleChange} required /><br /><br />
        <input name="location" placeholder="Location" onChange={handleChange} required /><br /><br />
        <input name="type" placeholder="Event Type" onChange={handleChange} required /><br /><br />

        <button type="submit">Save Event</button>
        <button type="button" onClick={() => navigate("/events")}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddEvent;

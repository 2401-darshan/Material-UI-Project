import React from "react";
import Card from "../components/Card";

const Dashboard = () => {
  return (
    <div>
      <Card title="Total Institutes" value={12} />
      <Card title="Total Departments" value={5} />
    </div>
  );
};

export default Dashboard;

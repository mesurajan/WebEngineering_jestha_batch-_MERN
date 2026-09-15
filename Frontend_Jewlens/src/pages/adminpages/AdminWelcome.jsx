import React from "react";

function AdminWelcome({ title }) {
  return (
    <div className="admin-welcome">
      <h1>{title}</h1>
      <p>Welcome to the admin dashboard.</p>
    </div>
  );
}

export default AdminWelcome;

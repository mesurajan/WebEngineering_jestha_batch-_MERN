import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2>Admin</h2>

        <nav>
          <NavLink to="/admin" end>
            Overview
          </NavLink>
          <NavLink to="/admin/product-list">Product List</NavLink>
          <NavLink to="/admin/product-create">Product Create</NavLink>
        </nav>
      </aside>

      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminDashboard;

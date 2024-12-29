import React, { useState } from "react";

function Operation() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddUser = () => {
    if (formData.id) {
      setUsers(
        users.map((user) =>
          user.id === formData.id ? { ...user, ...formData } : user
        )
      );
    } else {
      setUsers([...users, { ...formData, id: Date.now() }]);
    }
    setFormData({ name: "", email: "" });
  };

  const handleEditUser = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    setFormData(userToEdit);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h1>CRUD App</h1>
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <button onClick={handleAddUser}>
        {formData.id ? "Update User" : "Add User"}
      </button>

      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
            <button onClick={() => handleEditUser(user.id)}>Edit</button>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Operation;

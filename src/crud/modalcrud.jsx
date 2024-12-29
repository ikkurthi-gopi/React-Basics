import React, { useState } from "react";

function Modal() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [selectedUser, setSelectedUser] = useState(null); // Tracks the user for the popup
  const [isModalOpen, setIsModalOpen] = useState(false); // Tracks modal visibility

  // Handle input change for the form
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add or Update User
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

  // Open Modal
  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  // Handle Delete
  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    closeModal();
  };

  // Handle Update from Modal
  const handleUpdateUser = () => {
    setUsers(
      users.map((user) =>
        user.id === selectedUser.id
          ? { ...user, name: selectedUser.name, email: selectedUser.email }
          : user
      )
    );
    closeModal();
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
            <button onClick={() => openModal(user)}>Details</button>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {isModalOpen && selectedUser && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <h2>User Details</h2>
            <p>Name: {selectedUser.name}</p>
            <p>Email: {selectedUser.email}</p>
            <input
              name="name"
              placeholder="Name"
              value={selectedUser.name}
              onChange={(e) =>
                setSelectedUser({ ...selectedUser, name: e.target.value })
              }
            />
            <input
              name="email"
              placeholder="Email"
              value={selectedUser.email}
              onChange={(e) =>
                setSelectedUser({ ...selectedUser, email: e.target.value })
              }
            />
            <button onClick={handleUpdateUser}>Update</button>
            <button onClick={() => handleDeleteUser(selectedUser.id)}>
              Delete
            </button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

// Inline styles for modal
const modalStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalContentStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
  width: "300px",
  textAlign: "center",
};

export default Modal;

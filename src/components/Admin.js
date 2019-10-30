import React from "react";

const Admin = ({ history }) => {
  const admin = () => {
    history.push("/admin");
  };

  return (
    <p className="admin" onClick={admin}>
      Admin
    </p>
  );
};

export default Admin;

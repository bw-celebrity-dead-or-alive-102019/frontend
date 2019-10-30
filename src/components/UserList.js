import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "auth";
import { Icon } from "semantic-ui-react";
import Nav from "components/Nav";

const UserList = ({ history, deleteUser, displayUsers }) => {
  const [users, setUsers] = useState();

  const handleDelete = id => {
    axiosWithAuth()
      .delete(`https://celebs-dead-or-alive.herokuapp.com/users/${id}`)
      .then(res => {
        deleteUser();
        history.push("/admin");
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    axiosWithAuth()
      .get("https://celebs-dead-or-alive.herokuapp.com/users")
      .then(res => {
        displayUsers();
        setUsers(res.data);
      })
      .catch(err => console.log(err));
  }, [setUsers, displayUsers]);

  return (
    <>
      <Nav history={history} />
      <div className="admin">
        <h2>User List</h2>
        <div className="user-wrapper">
          {users &&
            users.map(user => (
              <div key={user.id} className="userBox">
                <p> User ID: {user.id} </p>
                <p>Username: {user.username}</p>
                <p>Name: {user.name}</p>
                <p>Points: {user.points === null ? 0 : user.points}</p>

                <div className="iconBox">
                  <span className="edit">
                    <Icon name="pencil" />
                  </span>
                  <span className="delete">
                    <Icon name="close" onClick={() => handleDelete(user.id)} />
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default UserList;

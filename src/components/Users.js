import React from 'react';

const Users = ({ users, edited, deleted }) => {
  const displayUsers = users.length === 0 ?
    (<tr><td colSpan="3">No users</td></tr>) :
    users.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>
            <button className="muted-button"
              onClick={() => edited(user)}>Edit</button>
            <button className="muted-button"
              onClick={() => deleted(user.id)}>Delete</button>
          </td>
        </tr>
      )
    });

  return (
    <React.Fragment>
      <h1>View users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {displayUsers}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default Users;
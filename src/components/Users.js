import React from 'react';

const Users = ({ users, editing, deleting }) => {
  return (
    <React.Fragment>
      <h2>View users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user => {
              return (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>
                    <button className="muted-button" onClick={() => editing(user)}>Edit</button>
                    <button className="muted-button" onClick={() => deleting(user.id)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default Users;
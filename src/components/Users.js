import React from 'react';

const Users = (props) => {
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
          {
            props.users.map(user => {
              return (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>
                    <button className="muted-button"
                      onClick={() => props.edited(user)}>Edit</button>
                    <button className="muted-button"
                      onClick={() => props.deleted(user.id)}>Delete</button>
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
import React from 'react';

const UpdateUser = ({ name, username, cancelled }) => {
  return (
    <React.Fragment>
      <h2>Add User</h2>
      <form onSubmit={event => event.preventDefault()}>
        <label>Name</label>
        <input type="text" name="name" value={name} />
        <label>Username</label>
        <input type="text" name="username" value={username} />
        <button type="submit">Update user</button>
        <button className="muted-button" onClick={cancelled}>Cancel</button>
      </form>
    </React.Fragment>
  );
}

export default UpdateUser;
import React from 'react';

const AddUser = () => {
  return (
    <React.Fragment>
      <h2>Add User</h2>
      <form onSubmit={event => event.preventDefault()}>
        <label>Name</label>
        <input type="text" name="name" />
        <label>Username</label>
        <input type="text" name="username" />
        <button type="submit">Add new User</button>
      </form>
    </React.Fragment>
  );
}

export default AddUser;
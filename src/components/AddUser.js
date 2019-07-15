import React, { useState } from 'react';

const AddUser = ({ added }) => {
  const [newUser, setNewUser] = useState({ name: '', username: '' });

  let formSubmitHandler = (event) => {
    event.preventDefault();
    if (newUser.name.trim() !== '' && newUser.username.trim() !== '') {
      setNewUser({ name: '', username: '' });
      added(newUser);
    } else return;
  }

  return (
    <React.Fragment>
      <h2>Add user</h2>
      <form onSubmit={formSubmitHandler}>
        <label>Name</label>
        <input type="text" name="name" value={newUser.name}
          onChange={event => setNewUser({ ...newUser, name: event.target.value })} />
        <label>Username</label>
        <input type="text" name="username" value={newUser.username}
          onChange={event => setNewUser({ ...newUser, username: event.target.value })} />
        <button>Add new User</button>
      </form>
    </React.Fragment>
  );
}

export default AddUser;
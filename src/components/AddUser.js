import React, { useState } from 'react';

const AddUser = (props) => {
  const [newUser, setNewUser] = useState({ name: '', username: '' });

  let formSubmitHandler = (event) => {
    event.preventDefault();
    if (newUser.name.trim() !== '' && newUser.username.trim() !== '') {
      setNewUser({ name: '', username: '' });
      props.added(newUser);
    } else return;
  }

  return (
    <React.Fragment>
      <h2>Add user</h2>
      <form onSubmit={formSubmitHandler}>
        <label>Name</label>
        <input type="text" name="name" value={newUser.name}
          onChange={event => setNewUser({ ...newUser, name: event.target.value })} />
        <label>Userame</label>
        <input type="text" name="username" value={newUser.username}
          onChange={event => setNewUser({ ...newUser, username: event.target.value })} />
        <button>Add new User</button>
      </form>
    </React.Fragment>
  );
}

export default AddUser;
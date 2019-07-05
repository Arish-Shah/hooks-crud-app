import React, { useState, useEffect } from 'react';

const EditUser = (props) => {
  const [user, setUser] = useState(props.user);

  useEffect(() => {
    setUser(props.user);
  }, [props.user]);

  let formSubmitHandler = (event) => {
    event.preventDefaul();
    if (user.name.trim() !== '' && user.username.trim() !== '') {
      props.updated(user);
    } else return;
  }

  return (
    <React.Fragment>
      <h2>Edit user</h2>
      <form onSubmit={formSubmitHandler}>
        <label>Name</label>
        <input type="text" name="name" value={user.name}
          onChange={(event) => setUser({ ...user, name: event.target.value })} />
        <label>Username</label>
        <input type="text" name="username" value={user.username}
          onChange={(event) => setUser({ ...user, username: event.target.value })} />
        <button type="reset" onClick={() => props.update(user)}>Update user</button>
        <button className="muted-button" onClick={props.cancelled}>Cancel</button>
      </form>
    </React.Fragment>
  );
}

export default EditUser;
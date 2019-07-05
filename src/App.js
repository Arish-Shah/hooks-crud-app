import React, { useState } from 'react';

import Users from './components/Users';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

const App = () => {
  //states
  const [users, setUsers] = useState([
    { id: 1, name: 'Arish Rahil Shah', username: 'arizh' },
    { id: 2, name: 'Felix Kjellberg', username: 'pewdiepie' },
    { id: 3, name: 'Ozair K', username: 'mok' }
  ]);
  const [editing, setEditing] = useState({ state: false, editingUser: null });

  //handlers
  let deleteHandler = (id) => {
    let updatedUsers = [...users];
    let deleteIndex = updatedUsers.findIndex(user => user.id === id);
    updatedUsers.splice(deleteIndex, 1);
    setUsers(updatedUsers);
    setEditing({ state: false, editingUser: null });
  }

  let editHandler = (user) => {
    setEditing({
      state: true,
      editingUser: {
        id: user.id,
        name: user.name,
        username: user.username
      }
    });
  }

  let updateHandler = (user) => {
    let updatedUsers = [...users];
    let updateIndex = updatedUsers.findIndex(el => el.id === user.id);
    updatedUsers[updateIndex] = user;
    setUsers(updatedUsers);
    setEditing({ state: false, editingUser: null })
  }

  let cancelHandler = () => {
    setEditing({ state: false, editingUser: null });
  }

  let addHandler = (user) => {
    let updatedUser = { ...user, id: users.length + 1 };
    setUsers(users.concat(updatedUser));
  }


  let addOrUpdate = editing.state ?
    <EditUser user={editing.editingUser} update={updateHandler} cancelled={cancelHandler} /> :
    <AddUser added={addHandler} />;

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {addOrUpdate}
        </div>
        <div className="flex-large">
          <Users users={users} deleted={deleteHandler} edited={editHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
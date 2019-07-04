import React, { useState } from 'react';

import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';
import Users from './components/Users';

const App = () => {
  const [editing, setEditing] = useState(false);
  const [users, setUsers] = useState([
    { id: 1, name: 'Arya Stark', username: 'needle' },
    { id: 2, name: 'Sansa Stark', username: 'winterfellLady' },
    { id: 3, name: 'Jon Snow', username: 'kinginnorth' }
  ]);

  let editHandler = (user) => {
    setEditing(true);
  }

  let deleteHandler = (id) => {
    let updatedUsers = { ...users };
    let elIndex = updatedUsers.find(user => user.id === id);
  }

  let cancelHandler = () => {
    setEditing(false);
  }

  let addUpdate = editing ? <UpdateUser cancelled={cancelHandler} /> : <AddUser />;

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {addUpdate}
        </div>
        <div className="flex-large">
          <Users users={users} editing={editHandler} deleting={deleteHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
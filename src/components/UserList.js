import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from './UserList.module.css';
import LoadingSpinner from './LoadingSpinner';


const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users') // jsonPlaceholder API
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(err => console.error(err));
    }, [])

    if (!users) return <LoadingSpinner />;
    
    return (
        <div className={classes.userList}>
          <h1>Users</h1>
          <ul>
            {users.map(user => (
              <li key={user.id}>
                {user.name} 
                <Link to={`/user/${user.id}`}>
                  <button>View Details</button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default UserList;
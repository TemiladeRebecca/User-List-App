import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import classes from './UserDetails.module.css';
import LoadingSpinner from './LoadingSpinner';

const UserDetails = () => {
    const { id } = useParams();  // extract userID from URL
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(err => setError('Failed to fetch user details'))
    }, [id]);


    if (error) return <p>{error}</p>;
    if (!user) return <LoadingSpinner />;  // Show spinner while fetching data

    return (
        <div className={classes.userDetails}>
            <h1>{user.name}'s Profile</h1>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p className={classes.text}>
                <strong>Address:</strong> {`${user.address.street}, ${user.address.suite}`}
                <br />
                {user.address.city}
                <br />
                {user.address.zipcode}
                <br />
                Coordinates: {user.address.geo.lat}, {user.address.geo.lng}
            </p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p className={classes.text}><strong>Company:</strong> {user.company.name}
                <br />
                {user.company.catchPhrase}
                <br />
                {user.company.bs}
            </p>

            <Link to="/"><button className={classes.button}>Back to Users</button></Link>
        </div>
    );
}

export default UserDetails;
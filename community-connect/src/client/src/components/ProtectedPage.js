import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const ProtectedPage = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <h1>Protected Page</h1>
            <p>Welcome, {user.username}!</p>
            {/* Add content for your protected page here */}
        </div>
    );
}

export default ProtectedPage;
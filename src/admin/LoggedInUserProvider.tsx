import React, { createContext, useContext, useState } from 'react';

const LoggedInUserContext = createContext();

export const useLoggedInUser = () => useContext(LoggedInUserContext);

export const LoggedInUserProvider = ({ children }) => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    return (
        <LoggedInUserContext.Provider value={{ username, password, setUsername, setPassword }}>
            {children}
        </LoggedInUserContext.Provider>
    );
};



// const handleLogin = async () => {
//     try {
//         const response = await fetch('http://172.20.10.2:3000/users', { // Use your machine's IP if on a physical device
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 username,
//                 email,
//                 phone,
//                 password
//             })
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         console.log(data.message);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// };
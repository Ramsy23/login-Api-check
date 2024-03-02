import React, { useState, useEffect } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();

      const foundUser = users.find(user => user.username === username && user.website === password);
     
      if (foundUser) {
        setMessage('Login successful');
      } else {
        setMessage('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    // This useEffect hook will run every time the 'message' state changes
    // This ensures that the 'message' state is up-to-date when rendering
    if (message) {
      setTimeout(() => {
        setMessage('');
      }, 3000); // Clear the message after 3 seconds
    }
  }, [message]); // Watch for changes in the 'message' state

  /*return (
    
  );*/
}

export default App;

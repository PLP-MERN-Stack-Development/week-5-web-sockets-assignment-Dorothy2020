import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatPage from './pages/ChatPage';

function App() {
  const [user, setUser] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/chat" element={<ChatPage user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;

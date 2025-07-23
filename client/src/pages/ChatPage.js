import React, { useEffect, useState } from 'react';
import socket from '../socket';

const ChatPage = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.emit('joinGlobal', user);
    socket.on('receiveMessage', (msg) => setMessages((prev) => [...prev, msg]));
  }, []);

  const sendMessage = () => {
    socket.emit('sendMessage', { sender: user, text: input });
    setInput('');
  };

  return (
    <div>
      <div>
        {messages.map((m, i) => (
          <p key={i}><strong>{m.sender}</strong>: {m.text} <em>{m.timestamp}</em></p>
        ))}
      </div>
      <input value={input} onChange={(e) => {
        setInput(e.target.value);
        socket.emit('typing', user);
      }} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatPage;

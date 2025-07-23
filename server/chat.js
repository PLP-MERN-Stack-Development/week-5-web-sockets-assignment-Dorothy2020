module.exports = (io, socket) => {
  socket.on('joinGlobal', (user) => {
    socket.join('global');
    io.to('global').emit('userJoined', user);
  });

  socket.on('sendMessage', (data) => {
    io.to('global').emit('receiveMessage', {
      ...data,
      timestamp: new Date().toISOString(),
    });
  });

  socket.on('typing', (user) => {
    socket.broadcast.emit('typing', user);
  });
};

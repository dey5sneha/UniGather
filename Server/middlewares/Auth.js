const checkAuthenticationAndData = (socket, data, callback)=> {
    // Check if data.name is empty
    if (!data || !data.username.trim()) {
        // Data is invalid, emit 'connect_error' event
        socket.emit('connectError', { message: 'Invalid Name' });
        return;
    }
    // User is authenticated and data is valid, proceed
    callback();
}

module.exports = checkAuthenticationAndData;
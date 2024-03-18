import React, { useState, useEffect, useCallback } from 'react';
import { useSocket } from '../context/SocketContext';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const socket = useSocket();
    const navigate = useNavigate();

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
        
    };

    const handleChangeCode = (e) => {
        setCode(e.target.value);
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const details = { email, code };
        socket.emit("join:call", details);
    };

    const handleJoinRoom = useCallback((data) => {
        navigate(`/room/${data.code}`);
    }, [navigate]);

    useEffect(() => {
        if (socket) {
            socket.on('join:room', handleJoinRoom);
            return () => {
                socket.off('join:room', handleJoinRoom);
            };
        }
    }, [socket, handleJoinRoom]);

    // useEffect(() => {
    //     if (socket) {
    //         socket.on('connect', () => {
    //             console.log('Connected to server');
    //         });
    //     }
    // }, [socket]);

    return (
        <>
            <form onSubmit={handleSubmitForm}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" value={email} onChange={handleChangeEmail} id="email" required />
                </div>
                <div>
                    <label htmlFor="id">Enter code</label>
                    <input type="text" value={code} onChange={handleChangeCode} id="code" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default LandingPage;

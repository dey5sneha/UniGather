import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useSocket } from '../context/SocketContext';
import { useNavigate } from 'react-router-dom';
import UserDataContext  from '../context/User'
const LandingPage = () => {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [name, setName] = useState("")
    const { setUsername} = useContext(UserDataContext);
    const socket = useSocket();
    console.log(socket.id);
    const navigate = useNavigate();

    const handleChangeName = (e)=>{
        setName(e.target.value);
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleChangeCode = (e) => {
        setCode(e.target.value);
    };

    //Sending the details to the server
    const handleSubmitForm = (e) => {
        e.preventDefault();
        const details = { name, email, code };
        setUsername(name);
        socket.emit("join:call", details);
    };

    //to redirect the user to the room
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
                    <label htmlFor="name">Name</label>
                    <input type="text" value={name} onChange={handleChangeName} id="name" required />
                </div>
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

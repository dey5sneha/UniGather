import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useSocket } from '../context/SocketContext';
import { useNavigate } from 'react-router-dom';
import UserDataContext from '../context/User'
import image from './image/frontPic.png'
const LandingPage = () => {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [name, setName] = useState("")
    const { setUsername, setRoomId } = useContext(UserDataContext);
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
        setRoomId(code);
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

            <div>
                <div className="container" >
                    <div className="container" >
                        <div className="row">
                            <div className=" col-sm-5 my-2" style={{ "borderRadius": "1rem", "backgroundColor": "#FFFFFF" }}>
                                <div className="mb-md-5 mt-md-4 pb-4 text-center" >
                                    <h2 className="mb-2 text-center text-dark ">Video calls and meetings for everyone</h2>
                                    <p className="text-black-50 mb-5 text-center my-3">Unigather is an opensource software that provides secure and easy to use videocalls</p>
                                    <form onSubmit={handleSubmitForm}>

                                        <div class="form-outline form-dark mb-4 mx-4">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" className="form-control" value={name} onChange={handleChangeName} id="name" required />
                                        </div>


                                        <div class="form-outline form-dark mb-4 mx-4">
                                            <label htmlFor="email" className="form-label text-dark">Email</label>
                                            <input type="email" className="form-control" value={email} onChange={handleChangeEmail} id="email" required />
                                        </div>
                                        <div class="form-outline form-dark mb-4 mx-4" style={{ "marginTop": "40px" }}>
                                            <label htmlFor="id" className="form-label text-dark">Enter code</label>
                                            <input type="text" className="form-control" value={code} onChange={handleChangeCode} id="code" />
                                        </div>
                                        <div>
                                            <button type="submit" className="btn btn-dark btn-sm px-3 " style={{ "marginTop": "40px", fontSize: "15px" }}>Ready to join</button>
                                        </div>
                                        
                                        {/* <div>
                                            <p className="mb-0 text-dark" style={{ "marginTop": "30px" }} >Don't have an account?
                                                <a className=" fw-bold" href="/signup">Sign Up</a> </p>
                                        </div> */}
                                    </form>
                                </div>
                            </div>
                            <div class=" col-sm-7 " >
                                <div className='container' >
                                    <img className='img-fluid' src={image} alt="book" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;

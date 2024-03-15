import React ,{useState, useEffect} from 'react';
import { useSocket } from './SocketProvider';




const LandingPage = ()=> {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const socket = useSocket();

    const handleChangeEmail = (e)=>{
        setEmail(e.target.value)
    }
    const handleChangeCode = (e)=>{
        setCode(e.target.value);
    }


    const handleSubmitForm = (e)=>{
        e.preventDefault();
        socket.emit("join:call", {email, code});
    }
    const handleJoinRoom = ()=>{
        
    }
    useEffect(()=>{
        socket.on('join:room', handleJoinRoom);
    },[socket, handleJoinRoom])
    
    

  return (
    <form onSubmit={handleSubmitForm}>
        <label htmlFor="email">Email</label>
        <input type="email" value={email} onChange={handleChangeEmail} id="email" />
        <label htmlFor="id">Enter code</label>
        <input type="text" value={code} onChange={handleChangeCode}  id="code" />
        <button type='submit'></button>
    </form>
  )
}

export default LandingPage
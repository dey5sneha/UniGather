import React, { createContext, useContext, useMemo } from "react";
import {io} from 'socket.io-client'
const SocketContext = createContext(null);

/**
 * The useSocket function is a custom hook in React that allows components to access the socket
 * context.
 * @returns The `useSocket` custom hook is being returned, which allows components to access the socket
 * context using the `useContext` hook.
 */
export const useSocket = ()=>{
    const socket = useContext(SocketContext);
    return socket;
}

/**
 * The `SocketProvider` function creates a context provider for a socket connection using the `io`
 * function with a specified URL.
 * @returns The `SocketProvider` component is being returned. It provides a `SocketContext.Provider`
 * with the `socket` value obtained from the `io('localhost:8000')` call using `useMemo`. The children
 * of the `SocketProvider` component are rendered within the `SocketContext.Provider`.
 */
export const SocketProvider = (props) =>{
    const socket = useMemo(() => io('localhost:8000'), [])
    return (
        <SocketContext.Provider value={socket}>
            {props.children}
        </SocketContext.Provider>
    )
}
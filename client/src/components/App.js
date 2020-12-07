import React from "react";
import Login from './Login';
import useLocalStorage from '../hooks/useLocalStorage';
import Dashboard from './Dashboard';
import { ContactsProvider } from "../context/ContactsProvider";
import { ConversationsProvider } from '../context/ConversationsProvider';
import { SocketProvider } from '../context/SocketProvider';


function App() {

    const [id, setId] = useLocalStorage('id');
    const dashboard = (
        <SocketProvider id={id}>
        <ContactsProvider>
            <ConversationsProvider>
            <Dashboard id={id} />
            </ConversationsProvider>
        </ContactsProvider>
        </SocketProvider>
 
    )

    return (
            id ? dashboard : <Login onIdSubmit={setId} />
    )
}

export default App;

import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed'
import React from 'react'
import LoginForm from './components/LoginForm'

const App = () => {

    const projectId="a2298206-205a-4be5-b27e-83064b3d1baf"
    if(!localStorage.getItem('username')) return <LoginForm/>
    return (
        <ChatEngine
        height="100vh"
        projectID={projectId}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
        renderchatHeader={(chat)=> {}}

        />

    )
}

export default App

import './App.scss'
import Chat from './components/sections/Chat/Chat';
import Sidebar from './components/sections/Sidebar/Sidebar';
import React, {useEffect, useState} from 'react'
import Pusher from "pusher-js"
import axios from "./axios"
import Login from './components/pages/Login/Login';
import { useStateValue } from './state/StateProvider';
import turnPhonePhoto from './assets/images/turn-phone.gif'


function App() {
  const [messages, setMessages] = useState([])
  const [{user}, dispatch] = useStateValue()

  useEffect(() => {
    axios.get("/messages/sync")
      .then(res => {
        setMessages(res.data)
      })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('110d7ac3646c40fe5522', {
      cluster: 'eu'
    });
    const channel = pusher.subscribe('messages')
    channel.bind('inserted', function(data) {
      setMessages([...messages, data]);
    })

    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages])

  console.log(messages)

  return (
    <>
    <div class="turn-phone">
        <img src={turnPhonePhoto} alt="turn-phone" class="turn-phone-photo"></img>
    </div>

    <div className="app">
      {!user ? <Login /> : (
        <div className="app__body">
          <Sidebar messages={messages}/>
          <Chat messages={messages} />
        </div>
      )}
      
    </div>
    </>
    
  )
}

export default App;

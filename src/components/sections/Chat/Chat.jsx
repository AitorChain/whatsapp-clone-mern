import "./Chat.scss";

import React, { useState } from "react";
import { Avatar } from "@mui/material";
import { useEffect } from "react";
import friendsPhoto from '../../../assets/images/friends.jpg'
import { IconButton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import { AttachFile } from "@mui/icons-material";
import { MoreVert } from "@mui/icons-material";
import { InsertEmoticon } from "@mui/icons-material";
import { Mic } from "@mui/icons-material";
import axios from '../../../axios'
import { useStateValue } from "../../../state/StateProvider";

const Chat = ({messages}) => {
  const [input, setInput] = useState("")
  const [{user}, dispatch] = useStateValue()

  const sendMessage = async (e) => {
    e.preventDefault()
    await axios.post('/messages/new', {
      message: input,
      name: user.displayName,
      timestamp: new Date().toUTCString(),
      received: true
    })
    setInput("")
  }


  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={friendsPhoto} />
        <div className="chat__headerInfo">
          <h3>Friends Group</h3>
          <p>Last seen at {" "} 
            {messages[messages.length - 1]?.timestamp}
          </p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map(message => (
          <p className={`chat__message ${message.name === user.displayName && 'chat__receiver'}`}>
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">
              {message.timestamp}
            </span>
          </p>
        ))}
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
            />
          <button onClick={sendMessage} type="submit">Send a message</button>
        </form>
        <Mic />
        
      </div>
    </div>
  );
};

export default Chat;

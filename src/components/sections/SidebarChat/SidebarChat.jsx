import './SidebarChat.scss'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Avatar } from '@mui/material'
import friendsPhoto from '../../../assets/images/friends.jpg'

const SidebarChat = ({messages}) => {

  return (
    <div className="sidebarChat">
      <Avatar src={friendsPhoto} />
      <div className="sidebarChat__info">
        <h2>Friends Group</h2>
        <p>{messages[messages.length - 1]?.message}</p>
      </div>
    </div>
  )
}

export default SidebarChat
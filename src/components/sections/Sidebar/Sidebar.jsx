import './Sidebar.scss'
import React from 'react'
import { IconButton, Avatar } from '@mui/material'
import { DonutLarge } from '@mui/icons-material'
import { Chat } from '@mui/icons-material'
import { MoreVert } from '@mui/icons-material'
import { SearchOutlined } from '@mui/icons-material'
import SidebarChat from '../SidebarChat/SidebarChat'
import { useStateValue } from '../../../state/StateProvider'

const Sidebar = ({messages}) => {
  const [{user}, dispatch] = useStateValue()
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar alt={user?.displayName} src={user?.photoURL}/>
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat messages={messages}/>
      </div>
    </div>
  )
}

export default Sidebar
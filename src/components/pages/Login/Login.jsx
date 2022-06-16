import './Login.scss'
import React from 'react'
import { Button } from '@mui/material'
import { auth, provider } from '../../../firebase'
import { signInWithPopup } from 'firebase/auth'
import { actionTypes } from '../../../state/Reducer'
import { useStateValue } from '../../../state/StateProvider'

const Login = () => {
  const [{}, dispatch] = useStateValue()

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user
        })
      })
      .catch(error => alert.apply(error.message))
  }
  return (
    <div className="login">
      <div className="login__container">
        <img src="logo512.png" alt="whatsapp" />
        <div className="login__text">
          <h1>Sign in to Messaging App</h1>
        </div>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  )
}

export default Login
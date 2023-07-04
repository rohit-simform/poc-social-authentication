import React from 'react'
import { LoginContainer } from './styles'
import GoogleLogin from '../../components/google-login/GoogleLogin'

function Login() {
  return (
    <div>
        <h1>Login with Social </h1>
        <LoginContainer>
            <GoogleLogin/>
        </LoginContainer>
    </div>
  )
}

export default Login
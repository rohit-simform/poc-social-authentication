import React from 'react'
import { LoginContainer } from './styles'
import GoogleLogin from '../../components/google-login/GoogleLogin'
import { context } from '../../store/context'
import { useNavigate } from 'react-router-dom';

function Login() {

  const ctx : any = React.useContext(context);

  const navigate : any = useNavigate();

  if(ctx.global && ctx.global.token){
     navigate("/");
  }


  return (
    <div>
        <h1>Login with Social </h1>
        <LoginContainer>
            <GoogleLogin setGlobal = {ctx.setGlobal} />
        </LoginContainer>
    </div>
  )
}

export default Login
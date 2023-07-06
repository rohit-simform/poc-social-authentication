
import React from 'react'
import { context } from '../../store/context';
import { Navigate } from 'react-router-dom';
import { ProfileContainer } from './styles';

function Profile() {

  const ctx : any = React.useContext(context);

  console.log("home ctx", ctx)


  if(!ctx || !ctx.global || !ctx.global.token){
    return <Navigate to="/login" />
 }

  return (
    <ProfileContainer>
       <h1>Profile</h1>
       <div><img src={ctx?.global?.profile_pic}/></div>
       <p> Name : <strong> {ctx?.global?.name} </strong></p>
       <p> Email : <strong> {ctx?.global?.email} </strong></p>

    </ProfileContainer>
  )
}

export default Profile
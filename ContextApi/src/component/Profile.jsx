import React, { useContext } from 'react'
import UserContext from '../context/UserContext'



function Profile() {

    const {user} = useContext(UserContext);

  return (
<>
<div className='bg-blue-950 h-[300px] flex flex-col mx-auto justify-center'>
  
  <div className='mx-auto  justify-between text-cyan-50 font-medium '>
  {
    !user ?(
      <div>You are not Loggdin!</div>
    ):(
      <>
      <h1>Welcome to Your Profile</h1>
      <p>Name: {user.username}</p>
      <p>Password : {user.passowrd}</p>
      </>

    )
  }
  </div>
 

  
</div>
</>
  )
}

export default Profile

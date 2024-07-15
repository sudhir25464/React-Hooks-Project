import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'


function Login() {
  const [username, seTusername] = useState('');

  const [passowrd, setPassword] = useState('')

  const { setUser } = useContext(UserContext);



  const HandleSubmit = (e) => {

    e.preventDefault()

    console.log('submit')
    if (!username || !passowrd) {
      alert('Please fill all fields')
    } else {
      setUser({ username, passowrd })
      alert('Login succesfully')
      seTusername('')
      setPassword('');
    }


  }
  return (
    <div className=' flex flex-col mx-auto  p-20 bg-blue-950   gap-2 border'>

<div className=' justify-center mx-auto'>
      <div className='flex justify-center'>
        <h3 className='mb-5 justify-center  mx-auto font-semibold text-lg'>Login</h3>
      </div>
      <form onSubmit={HandleSubmit}>
        <div className='mb-5'>
          <input type='text'
          className='h-10 rounded w-60 px-1'
            value={username}
            onChange={(e) => seTusername(e.target.value)}
            placeholder='User name' />
        </div>
        <div className='mb-5'>
          <input type='password'
          className='h-10 rounded w-60 px-1'
            value={passowrd}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password' />
        </div>

        <div className='flex justify-center'>
          <button className=' px-4 py-1 rounded text-slate-200 font-semibold bg-red-950 ' type='submit'>Submit</button>

        </div>
      </form>

      </div>
    </div>
  )
}

export default Login

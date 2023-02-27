import React from 'react'
import SavedCoins from '../Components/SavedCoins'
import { UserAuth } from '../context/AuthContext'
import {useNavigate, Navigate} from "react-router-dom"

const AccountPage = () => {

  const {user, logOut} = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut()
      navigate('/')
    } catch (error) {
      console.log(error.message)
    }
  }

  if (user) {
    return (

      <div className='max-w-[1140px] mx-auto'>
        <div className='flex justify-between items-center my-12 py-8 rounded-div'>
          <div>
            <h1 className='font-bold text-2xl'>Account</h1>
            <div>
              <p>Welcome, {user?.email}</p>
            </div>
          </div>
          <div>
            <button onClick={handleSignOut} className='border px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl'>Sign Out</button>
          </div>
        </div>
        <div className='flex justify-between items-center my-12 py-8 rounded-div'>
          <div className='w-full min-h-[300px]'>
            <h1 className='text-2xl font-bold py-4'>WatchList</h1>
            <SavedCoins/>
          </div>
        </div>
      </div>
    )
  } else {
    return <Navigate to ='/signIn'/>
  }

  
}

export default AccountPage
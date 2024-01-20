import { onAuthStateChanged,getAuth } from 'firebase/auth'
import { useEffect, useState } from 'react'

export function useAuthStatus() {
    const [loggedIn, setLoggedin] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)

    useEffect(()=>{
        const auth = getAuth()
        onAuthStateChanged(auth, (user)=>{
            //if person is authenticated
            if(user){
                setLoggedin(true)
            }
            setCheckingStatus(false);
        })
    }, [])
  return (
    {loggedIn, checkingStatus}
  )
}

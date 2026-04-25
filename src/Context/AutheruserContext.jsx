import { onAuthStateChanged, signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import { _Auth } from "../Backend/BackendBass"

export let authUser = createContext()
const AutheruserContext = ({ children }) => {
    let [userData, setUserData] = useState(null)

    function logout() {
        signOut(_Auth)
        setUserData(null)
        toast.success('Logged Out')
        console.log(userData)
    }   

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(_Auth, (useData) => {
        if (useData?.emailVerified == true) {
            setUserData(useData)
        }
        else {
            setUserData(null)
        }
    })
    return ()=>unsubscribe
})
    // console.log(userData)
    return (
        <authUser.Provider value={{userData,logout}}>
            {children}
        </authUser.Provider>
    )
}
export default AutheruserContext
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged,signOut } from "firebase/auth";
import { createContext,useEffect,useState } from "react"
import { auth } from "../firebase";

export const UserContext = createContext();

const UserProvider = ({children}) => {
  
    const [user, setUser] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,user=> {
            console.log("user",user);
            if(user){
                const {email,photoURL,displayName,uid} = user;
                setUser({email,photoURL,displayName,uid})
            }else{
                setUser(null)
            }
        })

        return() => unsubscribe()
       }, [])


    const registerUser = (email,password) => 
        createUserWithEmailAndPassword(auth,email,password)

    const loginUser = (email,password) => 
        signInWithEmailAndPassword
        (auth,email,password)

    const singOutUser = () => signOut(auth)
    
  
return (
    <UserContext.Provider value={{user,setUser, registerUser,loginUser,singOutUser}}>

        {children}
    </UserContext.Provider>
    
  )
}

export default UserProvider;
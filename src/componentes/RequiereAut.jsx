import { useContext } from "react"
import { UserContext } from "../context/UserProvider"
import { Navigate } from "react-router-dom"


const RequiereAut = ({children}) => {

   const {user} = useContext(UserContext)

   if(!user){
   return<Navigate to="/login" />
   }
  return children
    
  
};

export default RequiereAut
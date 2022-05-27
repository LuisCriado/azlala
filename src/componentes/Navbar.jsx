import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../context/UserProvider"

const Navbar = () => {

    const {user,singOutUser}= useContext(UserContext)

    const handleClickLogout =  async() => {
      try {
        await singOutUser()
      } catch (error) {
        console.log("")
      }

    }
      
  return (
    
    <div>
      <button onClick={handleClickLogout}>LogOut</button>
        {
            user ?
             (<><NavLink to="/">Inicio</NavLink>
             
             </>
             ): (
             <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">registrado</NavLink>
            </>
            )} 
    </div>
    
  )
}

export default Navbar
import { useContext, useState } from "react"
import { UserContext } from "../context/UserProvider"
import { useNavigate } from "react-router-dom"

const Login = (props) => {

  const [email, setEmail] = useState("luisdcriado1@gmail.com")

  const [password, setPassword] = useState("123456")

    const {loginUser} = useContext(UserContext)
    const navegate = useNavigate()
    

    const handleSumbit = async(e) => {
      e.preventDefault()
      console.log("form :",email,password)
      
      try {
        await loginUser(email,password)
        console.log(" usuario logiado")
      } catch (error) {
         console.log(console.log("error al logear"))
      }
       
    }
 


  return (<>
          <h1>login</h1>
          <form onSubmit={handleSumbit} >
      <input type="email" 
      placeholder="ingrese email" 
      value={email} 
      onChange={e => setEmail(e.target.value)}/>

      <input type="pasword" 
      placeholder="ingrese Contraseña" 
      value={password} 
      onChange={e => setPassword(e.target.value)}/>

      <button type="submit">Ingresa</button>
      

    </form>
 </> )
}

export default Login
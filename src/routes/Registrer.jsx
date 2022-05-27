import { async } from "@firebase/util"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserProvider"

const Registrer = () => {
 const navegate = useNavigate()
 const {registerUser} = useContext(UserContext)  
 const {register,
      handleSubmit ,
      formState:{errors},
      getValues,
      setError
    }
      = useForm({
        defaultValues: {
          email: "asd@asd.com"
          
}});
   

  
const onSubmit = async({email,password}) => {
     try {
       await registerUser(email,password)
       console.log("registro exitoso");
       navegate("/");
     } catch (error) {
       console.log(error.code);
      switch (error.code) {
        case "auth/email-already-in-use":
          console.log("email ya registrado");
          setError("email",{
            message:"email ya registrado"})
          break;
      case "auth/invalid-email":
        console.log("email invalido");
        setError("email",{
          message:"Formato de email no Valido"})
          break;
        default:
          console.log("error");
          break;
      }
            
        }
     
          
}


   


  return (
    <>
    <h1>register</h1>
    <form onSubmit={handleSubmit(onSubmit)} >
      <input type="email" 
      placeholder="ingrese email" 
      {...register("email",{required:
        {value:true,
        message:"Campo obligatorio"}
      ,pattern:{value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ ,
        message:"email invalido"}})}
        
      />
      {errors.email &&  <p>{errors.email.message}</p>}

      <input type="password" 
      placeholder="ingrese Contraseña" 
       {...register("password",
       {minLength:{value:6,
        message:"minimo 6 caracteres"},
        validate:{
          trim: v => {
            if (!v.trim()) {
              return "escribi algo";
              return true;
            }
          }
        }
     })}
      />
      {errors.password && errors.password.message}


      <input type="password" 
      placeholder="ingrese Contraseña" 
       {...register("repassword",{
         setValueAs:(v) => v.trim(),
          validate: {
            equals: v => v === getValues("password") || "contraseñas no coinciden"
          
          }
       })}
      />
      {errors.repassword && <p>{errors.repassword.message}</p> }

      <button type="submit">Regristrarse</button>
      

    </form>
    </>
  )
}

export default Registrer
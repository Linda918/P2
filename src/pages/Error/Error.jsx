import {useEffect}  from 'react'
import {useNavigate} from "react-router-dom"

const Error = () => {
 const navigate = useNavigate ()
 useEffect (() => {
        setTimeout(() => {
            navigate ("/")
        },2000)
 }, [navigate])

    return (
    <div>
        <h1>Error</h1>
        <p>Regresando a la pagina de inicio </p>
    </div>
  )
}

export default Error;
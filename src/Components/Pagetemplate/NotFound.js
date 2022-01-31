import { Link } from "react-router-dom"

const NotFound = ()=>{
    return(
        <div>
            <h1>Bardzo mi przykro, ale podana strona nie istnieje :(</h1>
            <h3>Proszę kliknij link poniżej i powróć do strony głównej</h3>
            <Link to='/'>Powrot</Link>
        </div>
    )
}
export default NotFound;
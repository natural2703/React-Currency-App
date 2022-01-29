import { Link } from "react-router-dom";

const Nav = ()=>{
    return(
        <nav class='navContainer'>
            <Link to='/' className="navItem">Tabela walut</Link>
            <Link to='/calculator' className="navItem">Kalkulator</Link>
            <Link to='/details' className="navItem">Szczegoly walut</Link>
        </nav>
    )
}
export default Nav;
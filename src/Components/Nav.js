import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import './styles/nav.css'
const Nav = ()=>{
    const {t} = useTranslation();
    return(
        <nav className='navContainer'>
            <Link to='/' className="navItem">{t('nav_tab')}</Link>
            <Link to='/calculator' className="navItem">{t('nav_calc')}</Link>
            <Link to='/details' className="navItem">{t('nav_details')}</Link>
        </nav>
    )
}
export default Nav;
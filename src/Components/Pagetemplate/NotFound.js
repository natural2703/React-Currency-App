import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"

const NotFound = ()=>{
    const {t} = useTranslation();
    return(
        <div>
            <h1>{t('not_found_h1')}</h1>
            <h3>{t('not_found_h3')}</h3>
            <Link to='/'>{t('not_found_btn')}</Link>
        </div>
    )
}
export default NotFound;
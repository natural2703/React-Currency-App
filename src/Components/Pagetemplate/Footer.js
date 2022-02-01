import { useTranslation } from "react-i18next";

const Footer = ()=>{
    const {t} = useTranslation()
    return(
        <footer>
            <p>{t('footer')}</p>
        </footer>
    )
}

export default Footer;
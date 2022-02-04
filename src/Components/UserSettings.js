import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux"
import './styles/langs.css'
import i18next from "i18next";
const UserSettings = ()=>{
    const {t} = useTranslation();
    const options = useSelector(data=>data.lang);
    console.log(options);
    const changeLang = (lang)=>{
        i18next.changeLanguage(lang.code);
    }
    return(
        <div className="langContainer">
            <h3>Lang list</h3>
            <div>
            {options.langs.map(curr=>{
                return <div onClick={()=>changeLang(curr)} className="singleLang" key={curr.code}>{curr.name}</div>
            })}
            
            </div>
        </div>
    )
}

export default UserSettings
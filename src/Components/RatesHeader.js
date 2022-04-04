import { useTranslation } from "react-i18next";
import i18n from "i18next";
const RatesHeader = ({sortBid,sortAsk,sortName,sortSh})=>{
    const {t} = useTranslation();
    
    return(
        <li>
                <div>
                    <p onClick={sortName}>{t('rates_header_name')}</p>
                </div>
                <div>
                    <p onClick={sortSh}>{t('rates_header_sh')}</p>
                </div>
                <div>
                    <p onClick={sortBid}>{t('rates_header_bid')}</p>
                </div>
                <div>
                    <p onClick={sortAsk}>{t('rates_header_ask')}</p>
                </div>
        </li>
    )
}
export default RatesHeader;
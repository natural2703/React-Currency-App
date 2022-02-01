import { useTranslation } from "react-i18next";

const RatesHeader = ()=>{
    const {t} = useTranslation();
    return(
        <li>
                <div>
                    <p>{t('rates_header_name')}</p>
                </div>
                <div>
                    <p>{t('rates_header_sh')}</p>
                </div>
                <div>
                    <p>{t('rates_header_bid')}</p>
                </div>
                <div>
                    <p>{t('rates_header_ask')}</p>
                </div>
        </li>
    )
}
export default RatesHeader;
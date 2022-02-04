import { useTranslation } from "react-i18next";

const DetailsHeader = ({sortByBid,sortByAsk,sortByDate})=>{
    const {t} = useTranslation();
    return(
        <div className='container'>
                <p onClick={sortByDate}>{t('details_header_data')}</p>
                <p onClick={sortByBid}>{t('details_header_bid')}</p>
                <p onClick={sortByAsk}>{t('details_header_ask')}</p>
                <p>{t('details_btn')}?</p>
        </div>
    )
}
export default DetailsHeader;
import '../styles/singleDetail.css'
const SingleDetail = ({currency,deleteItem})=>{
    const del = (e,date)=>{
        e.preventDefault();
        deleteItem(date);
        //console.log(deleteItem)
    }
    return(
        <div className='container'>
            <p>{currency.effectiveDate}</p>
            <p>{currency.bid}</p>
            <p>{currency.ask}</p>
            <button className="delCurrBtn" onClick={(e)=>del(e,currency.effectiveDate)}>usun</button>
        </div>
    )
}
export default SingleDetail;
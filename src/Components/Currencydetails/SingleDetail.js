import '../styles/singleDetail.css'
const SingleDetail = ({currency})=>{
    return(
        <div className='container'>
            <p>{currency.effectiveDate}</p>
            <p>{currency.bid}</p>
            <p>{currency.ask}</p>
            <button>usun</button>
        </div>
    )
}
export default SingleDetail;
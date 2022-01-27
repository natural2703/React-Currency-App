import './styles/singleRate.css'
const SingleRate = ({currency}) =>{
    const clickHandler = (e,curr)=>{
        e.preventDefault();
        console.log("nav to "+ curr)
    }
    return(
        <li onClick={(e)=>clickHandler(e,currency.currency)}>
                <div>
                    <p>{currency.currency}</p>
                </div>
                <div>
                    <p>{currency.code}</p>
                </div>
                <div>
                    <p>{currency.bid}</p>
                </div>
                <div>
                    <p>{currency.ask}</p>
                </div>
        </li>
    )
}

export default SingleRate;
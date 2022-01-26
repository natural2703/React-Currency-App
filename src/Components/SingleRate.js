import './styles/singleRate.css'
const SingleRate = ({currency}) =>{
    const clickHandler = (e,curr)=>{
        e.preventDefault();
        console.log("nav to "+ curr)
    }
    return(
        <li onClick={(e)=>clickHandler(e,currency.currency)}>
            <p>{currency.currency}</p>
        </li>
    )
}

export default SingleRate;
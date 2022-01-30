import { useNavigate } from 'react-router-dom';
import './styles/singleRate.css'
const SingleRate = ({currency}) =>{
    const nav = useNavigate();
    const clickHandler = (e,curr)=>{
        e.preventDefault();
        nav('/details/'+curr);
    }
    return(
        <li onClick={(e)=>clickHandler(e,currency.code)}>
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
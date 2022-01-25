import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { add, feedData } from "../Redux/CurrSlice";
import SingleRate from "./SingleRate";

const RatesList = ()=>{
    useEffect(()=>{
        axios.get("https://api.nbp.pl/api/exchangerates/tables/c?format=json")
        .then(data=>{
            //console.log(data.data[0].rates)
            dispatcher(feedData(data.data[0].rates))
        })
        .catch(error=>console.log(error))
    },[])
    const dispatcher = useDispatch()
    const currencies = useSelector(data=>data.currency.currencies);
    console.log(currencies)
    const currList = currencies.map(curr=>{
        <li key={Math.random()}>asd</li>
    })
    return(
        <ul>
            <h1>header</h1>
            {currencies.map((curr)=>{
                 return <SingleRate key={Math.random()} currency={curr}/>
            })}
               
            
        </ul>
    )
}
export default RatesList;
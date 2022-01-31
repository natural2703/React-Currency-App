import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { sortByBid, feedData } from "../Redux/CurrSlice";
import RatesHeader from "./RatesHeader";
import SingleRate from "./SingleRate";
import './styles/ratesList.css'

const RatesList = ()=>{
    useEffect(()=>{
        // dodaj local storage !!!
        const data = localStorage.getItem('currencies');
        if(data){console.log(data)}
        axios.get("https://api.nbp.pl/api/exchangerates/tables/c?format=json")
        .then(data=>{
            console.log(data.data[0].rates)
            dispatcher(feedData(data.data[0].rates))
            if(!data){
                localStorage.setItem('currencies',data.data[0].rates);
            }
            else{
                console.log('dane sa dodaj je do reduxa');
            }
        })
        .catch(error=>console.log(error))
        
    },[])
    const dispatcher = useDispatch()
    let currencies = useSelector(data=>data.currency.currencies);
    
    //console.log(currencies)
    const currList = currencies.map(curr=>{
        <li key={Math.random()}>asd</li>
    })
    
    const sortByBid = ()=>{
    }
    return(
        <ul>
            <RatesHeader/>
            {currencies.map((curr)=>{
                 return <SingleRate key={Math.random()} currency={curr}/>
            })}
               
            
        </ul>
    )
}
export default RatesList;
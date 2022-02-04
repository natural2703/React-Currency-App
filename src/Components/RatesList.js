import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { sortByBid, feedData,sortByAsk } from "../Redux/CurrSlice";
import RatesHeader from "./RatesHeader";
import SingleRate from "./SingleRate";
import './styles/ratesList.css'
import fetchCurrency from "../aios/fetchCurrency";
const RatesList = ()=>{
    useEffect(()=>{
        // dodaj local storage !!!
        /*const data = localStorage.getItem('currencies');
        if(data){console.log(data)}*/
        /*axios.get("https://api.nbp.pl/api/exchangerates/tables/c?format=json")
        .then(data=>{
            console.log(data.data[0].rates)
            dispatcher(feedData(data.data[0].rates))
            //localStorage.setItem('currencies',JSON.stringify(data.data[0].rates));
            
        })
        .catch(error=>console.log(error))*/
        fetchCurrency(dispatcher);
    },[])
    const dispatcher = useDispatch()
    let currencies = useSelector(data=>data.currency.currencies);
    
    //console.log(currencies)
    const currList = currencies.map(curr=>{
        <li key={Math.random()}>asd</li>
    })
    
    const sortBid = ()=>{
        dispatcher(sortByBid())
    }
    const sortAsk = ()=>{
        dispatcher(sortByAsk())
    }
    return(
        <div class="myCurrCtn">
            <RatesHeader sortBid={sortBid} sortAsk={sortAsk}/>
            {currencies.map((curr)=>{
                 return <SingleRate key={Math.random()} currency={curr}/>
            })}
               
            
        </div>
    )
}
export default RatesList;
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { sortByBid, feedData,sortByAsk, sortByName } from "../Redux/CurrSlice";
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
    const [sortAskDecision,setSortAskDecision] = useState(0);
    const [sortBidDecision,setSortBidDecision] = useState(0);
    const dispatcher = useDispatch()
    let currencies = useSelector(data=>data.currency.currencies);
    
    //console.log(currencies)
    const currList = currencies.map(curr=>{
        <li key={Math.random()}>asd</li>
    })
    
    const sortBid = ()=>{
        dispatcher(sortByBid(sortBidDecision));
        setSortBidDecision(sortBidDecision+1);
    }
    const sortAsk = ()=>{
        dispatcher(sortByAsk(sortAskDecision))
        setSortAskDecision(sortAskDecision+1);
    }
    const sortName = ()=>{
        console.log('works')
        dispatcher(sortByName());
    }
    const sortSh = ()=>{

    }
    return(
        <div class="myCurrCtn">
            <RatesHeader sortBid={sortBid} sortAsk={sortAsk} sortName={sortName} sortSh={sortSh}/>
            {currencies.map((curr)=>{
                 return <SingleRate key={Math.random()} currency={curr}/>
            })}
               
            
        </div>
    )
}
export default RatesList;
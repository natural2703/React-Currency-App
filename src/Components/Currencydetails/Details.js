import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import SingleDetail from "./SingleDetail";
import DetailsHeader from './DetailsHeader'
import Cookies from "universal-cookie/es6";
import '../styles/details.css'
const Details = ()=>{
    const {currCode} = useParams();
    const [startDate,setStartDate] = useState(new Date(2021, 6, 24));
    const [endDate,setEndDate] = useState(new Date(2022, 0, 24));
    const [error, setError] = useState('');
    const [data,setData] = useState({});
    const [coursesList,setCoursesList] = useState([]);
    const [askSort,setAskSort] = useState(1);
    const [bidSort,setBidSort] = useState(1)
    const [request, setRequest] = useState("https://api.nbp.pl/api/exchangerates/rates/c/"+currCode+"/2022-01-01/2021-01-20?format=json")
    useEffect(()=>{
        const cookies = new Cookies();
        cookies.set('startDate', startDate, { path: '/' });
        cookies.set('endDate',endDate,{path:'/'})
        console.log(cookies.get('startDate'));
    },[])
    //console.log(coursesList)
    useEffect(()=>{
        try{
        const date = new Date(endDate);
        const sDate = new Date(startDate);
        if(date>sDate){
            const t = date.toISOString().split('T')[0];
            const t2 = sDate.toISOString().split('T')[0];
            //console.log(date>sDate);
            setRequest("https://api.nbp.pl/api/exchangerates/rates/c/"+currCode+"/"+t2+"/"+t+"?format=json");
            setError('')
        }
        else{
            setError("ZŁY ZAKRES DAT!@@@!")
        }
    }
        catch(err){
            
        }
    },[endDate,startDate])

    const fetchData = ()=>{
        axios.get(''+request)
        .then(curr=>{
            setData(curr.data);
            setCoursesList(curr.data.rates);
        })
        .catch(err=>setError(err));
    }

    const handleStartDate = (e)=>{
        e.preventDefault()
        setStartDate(e.target.value);
        
    }
    const handleEndDate = (e)=>{
        e.preventDefault()
        setEndDate(e.target.value);
        
    }
    const sortByBid = ()=>{
        let sorted = [];
        if(bidSort%2==0)
             sorted = [...coursesList].sort((
                (a,b)=>{return b.bid-a.bid}
            ));
        else{
             sorted = [...coursesList].sort((
                (a,b)=>{return a.bid-b.bid}
            ));
        }
        setBidSort(bidSort+1)
        setCoursesList(sorted);
    }
    const sortByAsk = ()=>{
        let sorted = [];
        if(askSort%2==0)
             sorted = [...coursesList].sort((
                (a,b)=>{return b.ask-a.ask}
            ));
        else{
             sorted = [...coursesList].sort((
                (a,b)=>{return a.ask-b.ask}
            ));
        }
        setAskSort(askSort+1);
        setCoursesList(sorted);
    }

    return(
        <div>
            
            <h1>details</h1>
            <h2>{currCode?currCode:'Nie podano naglowka'}</h2>
            <h3>{coursesList.length}</h3>
            <h3>{error}</h3>
            <form className="containter">
                <div className="item">
                    <label>Od:</label>
                    <input type='date' value={startDate} onChange={(e)=>handleStartDate(e)}/>
                </div>
                <div className="item">
                    <label>Do:</label>
                    <input type='date' value={endDate} onChange={(e)=>{handleEndDate(e)}}/>
                </div>
                <div className="item">
                <button onClick={(e)=>{
                    e.preventDefault()
                    fetchData();
                    }}>
                    Pobierz dane
                </button>
                </div>
            </form>
            {coursesList.length>0?<DetailsHeader sortByBid={sortByBid} sortByAsk={sortByAsk}/>:<></>}
            {coursesList.map(item=>{
                return <SingleDetail currency={item} key={item.no}/>
            })}
        </div>
    )
}
export default Details;
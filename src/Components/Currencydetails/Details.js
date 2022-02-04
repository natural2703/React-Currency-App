import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SingleDetail from "./SingleDetail";
import DetailsHeader from './DetailsHeader'
import Cookies from "universal-cookie/es6";
import '../styles/details.css'
import { useTranslation } from "react-i18next";

const Details = ()=>{
    const nav = useNavigate();
    const {t} = useTranslation();
    const {currCode} = useParams();
    const [startDate,setStartDate] = useState(new Date(2021, 6, 24));
    const [endDate,setEndDate] = useState(new Date(2022, 0, 24));
    const [error, setError] = useState('');
    const [data,setData] = useState({});
    const [coursesList,setCoursesList] = useState([]);
    const [askSort,setAskSort] = useState(1);
    const [bidSort,setBidSort] = useState(1)
    const [request, setRequest] = useState("https://api.nbp.pl/api/exchangerates/rates/c/"+currCode+"/2022-01-01/2021-01-20?format=json")
    const [buttonDisabled,setButtonDisabled] = useState(false);
    useEffect(()=>{
        const cookies = new Cookies();
        /*cookies.set('dates', {
        startDate
        ,endDate
        }, { path: '/' });*/
        if(cookies.get('dates')){
            setStartDate(cookies.get('dates').startDate);
            setEndDate(cookies.get('dates').endDate);
        }
        console.log(cookies.get('dates'));
    },[])
    //console.log(coursesList)
    useEffect(()=>{
        try{
        const date = new Date(endDate);
        const sDate = new Date(startDate);
        if(date>sDate && date<Date.now() && sDate<Date.now()){
            const t = date.toISOString().split('T')[0];
            const t2 = sDate.toISOString().split('T')[0];
            //console.log(date>sDate);
            setRequest("https://api.nbp.pl/api/exchangerates/rates/c/"+currCode+"/"+t2+"/"+t+"?format=json");
            setError('')
            setButtonDisabled(false);
        }
        else{
            setError("ZŁY ZAKRES DAT!@@@!")
            setButtonDisabled(true);
        }
    }
        catch(err){
            
        }
    const cookies = new Cookies();
    cookies.set('dates', {
        startDate,
        endDate,
        currCode
        }, { path: '/' });
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
    const sortByDate=()=>{
        /*let item = coursesList[0];
        for(let i=0;i<coursesList.length;i++){
            console.log(Date.parse(coursesList[i].effectiveDate))
        }*/
        let sorted = [...coursesList].sort((
            (a,b)=>{return Date.parse(a.effectiveDate)-Date.parse(b.effectiveDate)}
        ));
        setCoursesList(sorted)
    }
    const deleteItem =(effectiveDate)=>{
        setCoursesList(coursesList.filter(item=>item.effectiveDate!==effectiveDate));
    }
    return(
        <div>
            
            <h1>{t('details')}</h1>
            <button onClick={(e)=>{nav('/')}}>{t('details_back_btn')}</button>
            <h2>{currCode?currCode:'Nie podano naglowka'}</h2>
            <h3>{coursesList.length}</h3>
            <h3>{error}</h3>
            <form className="containter">
                <div className="item">
                    <label>{t('details_data_from')}</label>
                    <input type='date' value={startDate} onChange={(e)=>handleStartDate(e)}/>
                </div>
                <div className="item">
                    <label>{t('details_data_to')}</label>
                    <input type='date' value={endDate} onChange={(e)=>{handleEndDate(e)}}/>
                </div>
                <div className="item">
                <button disabled={buttonDisabled} onClick={(e)=>{
                    e.preventDefault()
                    fetchData();
                    }}>
                   {t('details_get_data_btn')}
                </button>
                </div>
            </form>
            {coursesList.length>0?<DetailsHeader sortByBid={sortByBid} sortByAsk={sortByAsk} sortByDate={sortByDate}/>:<></>}
            {coursesList.map(item=>{
                return <SingleDetail currency={item} key={item.no} deleteItem={deleteItem}/>
            })}
        </div>
    )
}
export default Details;
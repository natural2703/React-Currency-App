import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import './styles/details.css'
import SingleDetail from "./SingleDetail";
const Details = ()=>{
    const {currCode} = useParams();
    const [startDate,setStartDate] = useState('')
    const [endDate,setEndDate] = useState('');
    const [error, setError] = useState('');
    const [data,setData] = useState({});
    const [coursesList,setCoursesList] = useState([]);
    console.log(coursesList)
    const request = "https://api.nbp.pl/api/exchangerates/rates/c/usd/2021-01-01/2021-01-20?format=json";
    const fetchData = ()=>{
        axios.get(''+request)
        .then(curr=>{
           //console.log(curr.data);
            setData(curr.data);
            setCoursesList(curr.data.rates);
            
            /*setData(curr);
            setCoursesList(curr)
            */
            //setCoursesList(coursesList.filter(item=>item.bid>3.7))
        })
        .catch(err=>setError(err));
    }
    return(
        <div>
            
            <h1>details</h1>
            <h2>{currCode?currCode:'Nie podano naglowka'}</h2>
            <h3>{coursesList.length}</h3>
            <form className="containter">
                <div className="item">
                    <label>Od:</label>
                    <input type='date'/>
                </div>
                <div className="item">
                    <label>Do:</label>
                    <input type='date'/>
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
            {coursesList.map(item=>{
                return <SingleDetail currency={item}/>
            })}
        </div>
    )
}
export default Details;
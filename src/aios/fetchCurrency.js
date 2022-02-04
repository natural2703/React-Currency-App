import axios from 'axios';
import { feedData } from '../Redux/CurrSlice';
const fetchCurrency = (dispatcher)=>{
    
    axios.get("https://api.nbp.pl/api/exchangerates/tables/c?format=json")
    .then(data=>{
        dispatcher(feedData(data.data[0].rates))
        
        
    })
    .catch(error=>{
        return error;
    })
    
}
export default fetchCurrency;
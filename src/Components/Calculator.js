import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles/calculator.css'
const Calculator = ()=>{
    const currencies = useSelector(data=>data.currency.currencies)
    const [selectedCurrency, setSelectedCurrency] = useState('dolar amerykański');
    const [exchangeCurrency,setExchangeCurrency] = useState('dolar amerykański');
    const [amount, setAmount] = useState(0);
   // console.log(currencies)
    const [result,setResult] = useState(0);
   
    const countHandler = (e)=>{
        e.preventDefault();
        
        
       console.log(selectedCurrency + " " + exchangeCurrency)
       const selectedPrice = currencies.find(curr=>curr.currency === selectedCurrency).bid;
       const excPrice = currencies.find(curr=>curr.currency === exchangeCurrency).bid;
       const ratio = selectedPrice/excPrice;
       console.log(selectedPrice + " " + excPrice + " ratio " + ratio * amount);
       setResult(ratio * amount)
    }
    return(
        <div>
            <h1>Przykładowy kalkulator walut</h1>  
            <form onSubmit={countHandler}>
                <div className="calcCtn">
                    <div className="calculatorCell">
                        <label>ilosc</label>
                        <input type='number' onChange={(e)=>setAmount(e.target.value)}/>
                    </div>
                    <div className="calculatorCell">
                        <div>
                            <label>waluta</label>
                        </div>
                        <select onChange={(e)=>setSelectedCurrency(e.target.value)}>
                            {currencies.map(curr=><option>{curr.currency}</option>)}
                        </select>
                    </div>
                    <div className="calculatorCell">
                        <button>Zamien</button>
                    </div>
                    <div className="calculatorCell">
                        <div>    
                            <label>na co wymieniam</label>
                        </div>
                        <select onChange={(e)=>setExchangeCurrency(e.target.value)}>
                            {currencies.map(curr=><option>{curr.currency}</option>)}
                            
                        </select>
                    </div>
                    <div className="calculatorCell">
                        <input type='submit' value='przelicz'/>
                    </div>
                </div>
                <p>Wynik: {result}</p>
            </form>
        </div>
    )
}

export default Calculator;
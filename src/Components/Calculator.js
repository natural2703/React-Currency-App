import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import './styles/calculator.css'
import { feedData } from '../Redux/CurrSlice';
import fetchCurrency from '../aios/fetchCurrency';
const Calculator = ()=>{
    const currencies = useSelector(data=>data.currency.currencies)
    const [selectedCurrency, setSelectedCurrency] = useState('dolar amerykański');
    const [exchangeCurrency,setExchangeCurrency] = useState('dolar amerykański');
    const [amount, setAmount] = useState(0);
    const [result,setResult] = useState(0);
    const dispatcher = useDispatch();
    const {t} = useTranslation();
    useEffect(()=>{
        if(currencies.length==0){
            //const c = localStorage.getItem('currencies');
            //console.log(c.length);
            const data = fetchCurrency(dispatcher);
            console.log(data);
            //dispatcher(feedData(data))
        }
    },[]);
    const countHandler = (e)=>{
        e.preventDefault();
       console.log(selectedCurrency + " " + exchangeCurrency)
       const selectedPrice = currencies.find(curr=>curr.currency === selectedCurrency).bid;
       const excPrice = currencies.find(curr=>curr.currency === exchangeCurrency).bid;
       const ratio = selectedPrice/excPrice;
       console.log(selectedPrice + " " + excPrice + " ratio " + ratio * amount);
       setResult(ratio * amount)
    }
    const replaceCurr = (e)=>{
        e.preventDefault();
        console.log(e);
        const tmpCurr = selectedCurrency;
        setSelectedCurrency(exchangeCurrency);
        setExchangeCurrency(tmpCurr);
    }
    
    return(
        <div className="calculatorCtn">
            <h1>{t('calculator_header')}</h1>  
            <form onSubmit={countHandler} className="calcForm">
                <div className="calcCtn">
                    <div className="calculatorCell">
                        <label>{t('calculator_Value')}</label>
                        <input type='number' onChange={(e)=>setAmount(e.target.value)}/>
                    </div>
                    <div className="calculatorCell">
                        <div>
                            <label>{t('calculator_Currency')}</label>
                        </div>
                        <select onChange={(e)=>setSelectedCurrency(e.target.value)}>
                            {currencies.map(curr=><option>{curr.currency}</option>)}
                        </select>
                    </div>
                    <div className="calculatorCell changeBtn">
                        <button className='calcBtn' onClick={replaceCurr}>{t('change_Currencies_Btn')}</button>
                    </div>
                    <div className="calculatorCell">
                        <div>    
                            <label>{t('calculator_Exchange_Currency')}</label>
                        </div>
                        <select onChange={(e)=>setExchangeCurrency(e.target.value) }>
                            {currencies.map(curr=><option value={curr.currency}>{curr.currency}</option>)}
                        </select>
                    </div>
                    <div className="calculatorCell">
                        <input type='submit' value='przelicz' className="calcBtn"/>
                    </div>
                </div>
                <p>{t('calculator_Result')} {result}</p>
            </form>
        </div>
    )
}

export default Calculator;
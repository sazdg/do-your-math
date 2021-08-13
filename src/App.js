import './App.css';
import Currency from './components/Currency';
import Input from './components/Input';
import Output from './components/Output';
import Footer from './components/Footer';
import React, { useEffect, useState } from 'react';
import Button from './components/Button';

//https://flaviocopes.com/react-how-to-get-value-input/ 
//https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/ 

function App() {

//useState enable states for the function components
  const [startPrice, setStartPrice] = useState(0); //destrutturazione di arry
  const [buyTotal, setBuyTotal] = useState(0);
//stato corrente e la funzione che lo aggiorna (set...)
  const [quantity, setQuantity] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [sellTotal, setSellTotal] = useState(0);
  const [percent, setPercent] = useState(0);
  const [gains, setGains] = useState(0);

  const doYourMath = () => {
    if(buyTotal > 0 && finalPrice > 0){
      setQuantity(buyTotal / startPrice);
      setPercent(((finalPrice - startPrice) / startPrice) * 100);
    }
  };

  //useEffect comprende il meccanismo di componentDidUpdate, DidMount, WillUnmount
  //per sincronizzare i risultati che dipendono dalla funzione doYourMathFinal
  //rischio di infinite loop
  useEffect(()=>{ 
    if(quantity > 0 && finalPrice > 0){
      setSellTotal(quantity * finalPrice);
      setGains(sellTotal - buyTotal);
    }
  }, [quantity, finalPrice, sellTotal, buyTotal,]);
  //quando cambia una di queste variabili, useEffect fa il render

  const Refresh = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="Title">
        <Currency />
      </div>

      <div className="Corpo">
        <Input title={'start price USDT'} 
          change={(event) => setStartPrice(Number(event.target.value))}/>
        <Input title={'buy total USDT'} 
          change={(event) => setBuyTotal(Number(event.target.value))} />

        <Output title={'quantity'} output={quantity} />

        <Input title={'final price USDT'} 
        change={(event) => setFinalPrice(Number(event.target.value))} />
        <Button label="Calculate" click={doYourMath} />

        <Output title={'sell total USDT'} output={sellTotal} />
        <Output title={'% change'} output={percent} />
        <Output title={'gains USDT'} output={gains} />
        <Button label="Reset" click={Refresh} callName="Refreshhh" />
      </div>

      <Footer />
    </div>
  );
}

export default App;

//         
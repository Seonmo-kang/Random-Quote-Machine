import React, {useState, useEffect } from 'react';
import QuoteBox from './components/QuoteBox';
import quoteList from './features/quote/quoteList';
import colorList from './components/colorList'; 
import { Loading } from './components/Loading';
import './App.css';
function App() {
  const [ quotes, setQuotes ] = useState([]);
  const [colors, setColors ] = useState([]);
  const [ isLoading , setIsLoading ] = useState(true);

  useEffect( ()=>{
    setQuotes(quoteList.quotes);
    setColors(colorList);
    setIsLoading(false);
  },[]);

  return (
    <div className="App">
      { isLoading? <Loading/> : <QuoteBox quotes={quotes} colors={colors}/> }
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Quote.module.css';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";


const QuoteBox = ({quotes, colors}) => {
    const [randomQuote, setRandomQuote] = useState({});
    

    useEffect(()=>{
        getRandomQuote();
    },[]);

    const [randomColor, setRandomColor] = useState(colors[Math.floor(Math.random()*colors.length)]);

    useEffect(()=>{
        getRandomColor();
    },[]);
    
    const clickHandler =()=>{
        // animate function : https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
        // option : https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#examples
        getRandomQuote();
        getRandomColor();
    }
    const getRandomQuote = () =>{
        setRandomQuote( ()=>{ 
            return quotes[Math.floor(Math.random()*quotes.length)];
        });
        document.getElementById("text").animate([{opacity:0},{opacity:1}],{duration:1000,easing:"ease-in"});
        document.getElementById("author").animate([{opacity:0},{opacity:1}],{duration:1000,easing:"ease-in"});
    }
    const getRandomColor = ()=>{
        setRandomColor( ()=>{
            return colors[Math.floor(Math.random()*colors.length)];
        });
        console.log('getRandomColor',randomColor);
        document.documentElement.style.setProperty('--designated-color',randomColor);
    }

    return (
        <div className={styles.quoteWrapper} id="quote-wrapper">
            <div className={styles.quoteBox} id="quote-box">
                
                <h2 className={styles.quoteText} id="text"> <FontAwesomeIcon className={styles.quote} icon={faQuoteLeft} /> {randomQuote.quote} </h2>
                <p className={styles.quoteAuthor} id="author">{randomQuote.author}</p>
            </div>
            <div className={styles.buttons}>
                <a className={styles.quoteTwitter} id="tweet-quote" href="twitter.com/intent/tweet" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                <button className={styles.newQuote} id="new-quote" onClick={ ()=> clickHandler()}>New quote</button>
            </div>
            
        </div>
    );
}
export default QuoteBox;


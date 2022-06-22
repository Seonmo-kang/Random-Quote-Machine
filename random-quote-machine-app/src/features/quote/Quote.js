import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { random } from './quoteSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Quote() {

    const { quoteList ,quoteIndex, isLoading } = useSelector( store => store.quote);
    const dispatch = useDispatch();
    // useEffect( ()=>{
    //     dispatch(random());
    // }, []);

    return (
        <div id="quote-box">
            <FontAwesomeIcon icon="fa-solid fa-quote-left" />
            { !isLoading && <h2 id="text"> {quoteList[quoteIndex].quote} </h2>}
            <h3 id="author">{quoteList[quoteIndex].author}</h3>
            <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank"><i></i></a>
            <button id="new-quote" onClick={dispatch(random())}>New quote</button>
        </div>
    );
}
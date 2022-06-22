**Random-Quote-Machine** *toy project from FreeCodeCamp*

-----------
**Preview**
![image](https://user-images.githubusercontent.com/66151730/175111537-4d5d48a3-74fe-4139-8aaa-02ab4b1f740f.png)

![image](https://user-images.githubusercontent.com/66151730/175111630-bfdff7a0-f16d-4c9f-921f-d8ddd57658de.png)

Project goal
+ Build an app with frontend framework ( react ).
+ Understand React framework.
+ Understand and review HTML, CSS.

**Tech Stack**
+ HTML 
+ JavaScript
+ CSS

**Advanced Feature**
+ React Hook( useState, useEffect )
+ animate CSS using ```document.getElementByID().animate( )``` function
```
    const getRandomQuote = () =>{
        setRandomQuote( ()=>{ 
            return quotes[Math.floor(Math.random()*quotes.length)];
        });
        document.getElementById("text").animate([{opacity:0},{opacity:1}],{duration:1000,easing:"ease-in"});
        document.getElementById("author").animate([{opacity:0},{opacity:1}],{duration:1000,easing:"ease-in"});
    }
```
+ Using CSS variable ```--designated-color```
``` CSS
/* src/App.css */ 
:root{
  --designated-color : #fff;
}

.App {
  text-align: center;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:100vw;
  height:100vh;
  background-color: var(--designated-color);
  transition: background-color 1s ease-in-out;
}
/* src/components/Quote.module.css */
.quoteText, .quoteAuthor{
    color : var(--designated-color);
}
```
+ Change style property using ```document.document.style.setProperty('--desingated-color',randomColor);```
```
// src/components/QuoteBox.js
    const [randomColor, setRandomColor] = useState(colors[Math.floor(Math.random()*colors.length)]);

    useEffect(()=>{
        getRandomColor();
    },[]);
    const getRandomColor = ()=>{
        setRandomColor( ()=>{
            return colors[Math.floor(Math.random()*colors.length)];
        });
        console.log('getRandomColor',randomColor);
        document.documentElement.style.setProperty('--designated-color',randomColor);
    }
```

**Improvements**
+ Using redux

**Module**

├── @fortawesome/fontawesome-svg-core@6.1.1

├── @fortawesome/free-brands-svg-icons@6.1.1

├── @fortawesome/free-solid-svg-icons@6.1.1

├── @fortawesome/react-fontawesome@0.1.18

├── @reduxjs/toolkit@1.8.2

├── @testing-library/jest-dom@5.16.4

├── @testing-library/react@13.3.0

├── @testing-library/user-event@14.2.1

├── bootstrap@5.1.3

├── react-bootstrap@2.4.0

├── react-dom@18.2.0

├── react-redux@8.0.2

├── react-scripts@5.0.1

├── react-transition-group@4.4.2

├── react@18.2.0

└── web-vitals@2.1.4

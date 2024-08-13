import logo from 'react-dom';
import './App.css';
import { BrowserRouter , Route , Routes  } from 'react-router-dom'
import Main from './components/pages/Main';
import Header from './components/Layout/Header';
import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import Count from './Context/CountContext';
import Start from './Context/StartContext';
import MoveableButton from './components/ButtonComponents/MoveableButton';
import Answers from "./Context/Answers.json"
function App() {
  
  const [count , setCount ] = useState(localStorage.getItem("count"))
  const [start , setStart ] = useState(localStorage.getItem("start"))
  function randomPlace   () {
    const screenWidth = window.screen.width ;
    const screenHeight = window.screen.height;
    

    const placeX = Math.random(1 , 5000);
    const placeY= Math.random(1 , 10000);

    // console.log({x : placeX , y : placeY});
    
    return {x : placeX , y : placeY};
  }
  return (
    <>
        <div className='w-100 h-100 bg-secondary align-center pt-5'>
         
          <BrowserRouter >
            <div className='w-100 h-100 '>
             
             
              <Count.Provider value={{count , setCount}}>
                <Start.Provider value={{start, setStart}}>
                  {Answers.map((answer , index) =>{
                       const r =  parseInt(Math.random()*2)
                       const rC =  parseInt(Math.random()*6)
                       console.log(Math.floor(Math.random() * 701) + 700);

                       const colors = [
                        "success" , "danger" , "info" , "primary" , "warning" , "secondary"
                       ]
                      const rD = parseInt(Math.random()*360)
                  return(
                 
                    <MoveableButton key={index} style={rD} text={answer.value} color={colors[rC]} pos={{x : r == 1 ? parseInt(Math.random()*100) : Math.floor(Math.random() * (1170 - 1100 + 1) ) + 1100 , y : Math.random(1 , 10000) * 550}} />
                  );
                })}
                  <Header />
                  <Routes>

                    <Route  index path='/' element={<Main  />} />

                  </Routes>
                </Start.Provider>
              </Count.Provider>
          
            </div>

          </BrowserRouter>
        </div>
    </>
  );
}

export default App;

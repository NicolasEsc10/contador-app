import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Boton } from './components/Boton';
import { Contador } from './components/Contador';
import { useState } from 'react';


function App() {
   const resetImg = (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
      <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
   </svg>)

   const [numUpdate, setNumUpdate] = useState(0);

   const increaseValue = () => {
      setNumUpdate(numUpdate + 1)
   };

   const decrementValue = () => {
      if (numUpdate > 0) {
         setNumUpdate(numUpdate - 1)
      }
   };

   const resetValue = () => {
      setNumUpdate(0)
   };

   return (
      <div className='app'>
         <div className='container-main'>
            <Contador
               numClick={numUpdate}
            />
            <div className='container-button'>
               <Boton
                  text='Sumar'
                  onPressButton={increaseValue}
                  colorButton='btn-success'
                  isAddButton={true}
               />
               <Boton
                  text='Restar'
                  onPressButton={decrementValue}
                  colorButton='btn-danger'
                  isRestButton={true}
               />
               <div className='container-button-reset'>
                  <Boton
                     text={resetImg}
                     onPressButton={resetValue}
                     colorButton='btn-secondary'
                  />
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;

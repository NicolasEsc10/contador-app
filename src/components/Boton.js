import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/boton.css'

export const Boton = ({ text, isAddButton, isRestButton, onPressButton, colorButton }) => {
   return (
      <>
         <button
            type='button'
            className={`btn ${isAddButton ? 'button-add' : isRestButton ? 'button-rest' : 'button-reset'} ${colorButton} `}
            onClick={onPressButton}>
            {text}
         </button>
      </>
   )
}

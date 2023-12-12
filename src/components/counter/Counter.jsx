import React from 'react';
import {useState} from "react";
import './Counter.css';

const Counter = () => {
    let [count, setCount] = useState(0)

    const handleClickIncrease = () => {

        if (count < 10) {
        setCount(count+1)
        }

    }
    const handleClickDecrease = () => {

        if (count <= 10 && count > 0) {
            setCount(count-1)
            }

    }

    const handleEnviarClick = () => {
        // Agrega la lógica para manejar el clic en el botón "Enviar"
        console.log('Botón "Enviar" clicado');
    };

    
    return (
        <div className="counter-container">
            <h1 className='titulo-counter'>¿QUE PUNTUACION LE PONES A LA PAGINA?</h1>
            <div className="counter-buttons">
                <button onClick={handleClickDecrease} className='decrease-button'>-</button>
                <p className='counter'>{count}</p>
                <button onClick={handleClickIncrease} className='increase-button'>+</button>
            </div>

            <button onClick={handleEnviarClick} className='enviar-button'>Enviar</button>
        </div>
    );
}


export default Counter;


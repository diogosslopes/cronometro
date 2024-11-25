import React, { useState, useContext } from "react";

const Timer = () => {

    const [number, setNumber] = useState(0)
    const [timer, setTimer] = useState(null)
    const [startStop, setStartStop] = useState("Iniciar")
    let numero = number

    const go = () => {
        if (timer !== null) {
            clearInterval(timer)
            setTimer(null)
            numero = number
            console.log("Parou")
            setStartStop("Iniciar")
        } else {
            setTimer(setInterval(() => {
                numero += 0.1
                let n = numero
                setNumber(n)
            }, 100))
            setStartStop("Pausar")
            console.log(timer)
        }
    }

    console.log(number)

    const stop = () => {
        clearInterval(timer)
        setNumber(0)
        setTimer(null)
        console.log(timer)
    }

    console.log("Tempo " + timer)

    return (
        <div>
            <div className="timer">
                <img src={require('../img/cronometro.png')} />
                <p>{number.toFixed(1)}</p>
            </div>
            <div className="buttons">
                <button className="button" onClick={go}>Iniciar</button>
                <button className="button" onClick={stop}>Limpar</button>
            </div>
        </div>
    )


}

export default Timer

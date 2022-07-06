import React from "react";
const TimerContext = React.createContext({
    timer: 0,
    updateTimer: (id) => null
})

console.log("timer " + TimerContext.timer)

export const TimerProvider = TimerContext.Provider

export default TimerContext

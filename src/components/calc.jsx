import { useState } from "react"
import { useRef } from "react"
const Calc = () => {

    const buttons = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", '+', "-", "*", "/", "=", "C"]

    const screenRef = useRef(null)

    const enterValue = (value) => {
        setScreenIsEmpty(false)
        screenRef.current.innerHTML = screenRef.current.innerHTML + value
    }

    const evalExpression = () => {
        const expression = screenRef.current.innerHTML
        try{
            screenRef.current.innerHTML = eval(expression)
        }
        catch(err){
            screenRef.current.innerHTML = "Do better please"
        }
        setScreenIsEmpty(false)
    }

    const clearScreen = () => {
        screenRef.current.innerHTML = ""
        setScreenIsEmpty(true)
    }

    const [screenIsEmpty, setScreenIsEmpty] = useState(true)
    const emptyScreen = <p>0</p>

    return (
        <main className="w-full h-screen bg-gray-900 flex items-center justify-center">
            <section className=" bg-gray-700 w-2/6 rounded-md">
                <div className="screenContainer">
                    <div className="screen" ref={screenRef}></div>
                    {screenIsEmpty? emptyScreen : ""}
                </div>
                <div className="body grid grid-cols-4">
                    {buttons.map( (button) => (
                        <button onClick={button === "C" ? clearScreen : button === "=" ? evalExpression : () => enterValue(button)} key={button} className="h-20 font-bold text-white m-1 hover:bg-gray-500">{button}</button>
                    ))}
                </div>
            </section>
        </main>
    )
}


export default Calc
import { useState, useRef } from "react";

const App = () => {
    const [counter, setCounter] = useState(0);
    const [fieldValue, setFieldValue] = useState(0);
    const inputRef = useRef(fieldValue);

    let multiplier = inputRef.current.value === '' || inputRef.current.value === '0' ? 1 : fieldValue;
    
    const incrementCounter = () => {
        setCounter(counter + (1 * multiplier));
    }

    const decrementCounter = () => {
        setCounter(counter - (1 * multiplier));
    }

    return (<div>
        <h1>{counter}</h1>
        <input
            ref={inputRef}
            type="number"
            value={fieldValue}
            placeholder="Pick a multiplier for increment and decrement"
            onChange={e => setFieldValue(e.target.value)}
        />
        <button onClick={incrementCounter}>
            Increment
        </button>
        <button onClick={decrementCounter}>
            Decrement
        </button>
    </div>);
}

export default App;
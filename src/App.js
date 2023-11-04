import { useState } from "react";

const App = () => {
    const [counter, setCounter] = useState(0);
    const [fieldValue, setFieldValue] = useState(5);
    const incrementCounter = () => {
        setCounter(counter + (1 * fieldValue));
    }

    const decrementCounter = () => {
        setCounter(counter - (1 * fieldValue));
    }

    return (<div>
        <h1>{counter}</h1>
        <input
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
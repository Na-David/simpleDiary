import React, {useState, useEffect} from 'react';

const OptimizeTest = () => {


    const [count, setCount] = useState(1);
    const [text, setText] = useState("");

    return <div style = {{padding : 50}}>
        <div>
            <h2>Count</h2>
            <button onClick = {() => setCount(count + 1)}>+</button>
        </div>
        <div>
            <h2>Text</h2>
            <input value={text} onChange = {(e) => setText(e.target.value)} />
        </div>
    </div>
}

export default OptimizeTest;
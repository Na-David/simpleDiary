import React, {useState, useEffect} from 'react';

const CounterA = React.memo(({count}) => {

    useEffect(() => {
        console.log(`counter A updated - count : ${count}`);
    })

    return <div>{count}</div>;
});

const BounterB = ({obj}) => {

    useEffect(() => {
        console.log(`Counter B updated - count: ${obj.count}`);
    })

    return <div>{obj.count}</div>;
};

const areEqual = (prevProps, nextProps) => {
    if(prevProps.obj.count === nextProps.obj.count) {
        return true; // if prevprops === nextprops ==> !rerendering
    }
    return false;
}

const MemoizedCounterB = React.memo(BounterB, areEqual);

const OptimizingTest2 = () =>{

    const [count, setCount] = useState(1);
    const [obj, setObj] = useState({
        count : 1
    })

    return <div style = {{padding: 50}}>
        <div>
            <h2> Counter A</h2>
            <CounterA count={count} />
            <button onClick={() => setCount(count)}>A button</button>
        </div>
        <div>
            <h2>COunter B</h2>
            <MemoizedCounterB obj={obj} />
            <button onClick={() => setObj({
                count : obj.count
            })}>B button</button>
        </div>

    </div>
}

export default OptimizingTest2;
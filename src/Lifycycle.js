import React, {useEffect, useState} from "react"

const Lifecycle = () => {

    const [isVisible, setIsVisible] = useState(false);
    const toggle = () => {setIsVisible(!isVisible)};
    const UnmountTest = () => {

        useEffect(()=> {
            console.log("Mount");
            return () => {
                console.log("unmount!")
            }
        }, []);
        return <div>Unmount Testing Component</div>;
    }

    // const [count, setCount] = useState(0);
    // const [text, setText] = useState("");

    // useEffect(()=>{
    //     console.log("Mount!")
    //     if (count > 5) {
    //         alert("Count cannot exceed to 5. Count will return to 1.")
    //         setCount(1)
    //     }
    // },[count])

    return <div style ={ {padding : 20}}>
        <button onClick={toggle}>On / Off</button>
        {isVisible && <UnmountTest/>}
        {/* <div>
            {count}
            <button onClick={() => {setCount(count+1)}}> + </button>
        </div>
        <div>
            <input value={text} onChange = {(e) => {setText(e.target.value)}}></input>
        </div> */}
    </div>
};

export default Lifecycle;
import { useState } from "react";

const DiaryEditor = () => {
    const [state,setState] = useState({
        author: "",
        content: "",
        grade: "Best"
    });

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        console.log(state);
        alert("Saved");
    };

    return (
    <div className="DiaryEditor">
        <h2>Today's Diary</h2>
        <div>
            <input 
            name= "author"
            value={state.author} 
            onChange = {handleChangeState}
            />
        </div>

        <div>
            <textarea
            name= "content"
            value = {state.content}
            onChange= {handleChangeState}
            />
        </div>

        <div>
        <label>Today's rating is: </label>
            <select name = "grade" value ={state.grade} onChange = {handleChangeState}>
                <option value = {1}>Best</option>
                <option value = {2}>Good</option>
                <option value = {3}>Soso</option>
                <option value = {4}>Not Satisfied</option>
                <option value = {5}>...</option>
            </select>
        </div>

        <div>

            <button onClick={handleSubmit}>Save</button>
        </div>
    </div>)
}

export default DiaryEditor;
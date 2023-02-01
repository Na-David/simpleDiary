import React, { useRef, useState } from "react";

const DiaryEditor = ({onCreate}) => {

    const authorInput = useRef();
    const contentInput = useRef();

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
        if (state.author.length < 1){
            //alert("Please check the publisher.")
            authorInput.current.focus();
            return ;
        }
        if (state.content.length < 5){
            contentInput.current.focus();
            return;
        }
        onCreate(state.author, state.content, state.grade);
        alert("Saved");
        setState({
            author: "",
            content: "",
            grade: "best"
        });
    };

    return (
    <div className="DiaryEditor">
        <h2>Today's Diary</h2>
        <div>
            <input 
            ref = {authorInput}
            name= "author"
            value={state.author} 
            onChange = {handleChangeState}
            />
        </div>

        <div>
            <textarea
            ref = {contentInput}
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
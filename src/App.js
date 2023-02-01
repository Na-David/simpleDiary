//import React, {useState, useEffect } from "react";
import { useState, useRef } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

// const dummyList = [
//   {
//     id: 1,
//     author: "David",
//     content: "Mattew",
//     grade: "Best",
//     created_date: new Date().getTime()
//   },
//   {
//     id: 2,
//     author: "Joseph",
//     content: "Joshua",
//     grade: "Best",
//     created_date: new Date().getTime()
//   },
//   {
//     id: 3,
//     author: "Daisy",
//     content: "Proverb",
//     grade: "Best",
//     created_date: new Date().getTime()
//   },
//   {
//     id: 4,
//     author: "James",
//     content: "Timothy",
//     grade: "Best",
//     created_date: new Date().getTime()
//   },
// ]

const App = () => {

  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, grade) => {
    const created_date = new Date().getTime();
    const newItem = {
      author, content, grade, created_date, 
      id: dataId.current
    };
    dataId.current += 1;
    setData([ newItem, ...data]);
  };

  return (
    <div className="App">
      {/* <h2>This is simple Diary</h2> */}
      <DiaryEditor onCreate = {onCreate} />
      <DiaryList diaryList = {[data]} />
    </div>
  );
}

export default App;

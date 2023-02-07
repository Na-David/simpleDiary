import { useMemo, useEffect, useRef, useState, useCallback } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
// import OptimizeTest from "./OptimizeTest";
// import OptimizingTest2 from "./OptimizingTest2";
// import Lifecycle from "./Lifycycle";

// https://jsonplaceholder.typicode.com/comments

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  //API호출, 데이터 가공
  const getData = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments').then((res) =>res.json());
    console.log(res);
    
    const initData = res.slice(0,20).map((it) => {
      return {
        author : it.email,
        content : it.body,
        emotion : Math.floor(Math.random() * 5)+1,
        created_date : new Date().getTime(),
        id : dataId.current++
      }
    })
    //정형화된 데이터를 setData에 대입
    setData(initData);
  }
  //호출된 API를 실행
  useEffect(()=>{
    getData();  
  },[])

  const onCreate = useCallback((author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    };

    dataId.current += 1;

    setData((data) => [newItem, ...data]);
  },[]);

  const onDelete = useCallback((targetId) => {
    setData(data => data.filter((it) => it.id !== targetId));
  },[]);

  const onEdit = useCallback((targetId, newContent) => {
    setData(data => data.map((it) => it.id === targetId ? {...it, content: newContent} : it))
  },[]);

 //Memoization Practice
  const getDiaryAnalysis = useMemo(() => {
    // console.log("Diary analysis has been started.");

    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return {goodCount, badCount, goodRatio};
  },[data.length]);

  const {goodCount, badCount, goodRatio} = getDiaryAnalysis;

  return (
    <div className="App">
      {/* <Lifecycle /> */}
      {/* <OptimizeTest /> */}
      {/* <OptimizingTest2 /> */}
      <DiaryEditor onCreate={onCreate} />
      <div>Total Diary number : {data.length}</div>
      <div>Good Diary number : {goodCount}</div>
      <div>Bad Diary number : {badCount}</div>
      <div>Good Diary Ratio : {goodRatio}</div>
      <DiaryList onEdit={onEdit} diaryList={data} onDelete={onDelete} />
    </div>
  );
}

export default App;

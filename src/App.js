import React, { useMemo, useEffect, useRef, useCallback, useReducer } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const reducer = (state, action) => {
  switch (action.type){
    case 'INIT' : {
      return action.data
    }
    case 'CREATE' : {
      const created_date = new Date().getTime();
      const newItem = {
        ...action.data,
        created_date
      }
      return [newItem, ...state];
    }
    case 'DELETE' : {
      return state.filter((it) => it.id !== action.targetId);
    }
    case 'EDIT' : {
      return state.map((it) => it.id === action.targetId? {...it, content: action.newContent} : it)
    }
    default : return state;
  }
}

export const DiaryStateContext = React.createContext();

const App = () => {
  // const [data, setData] = useState([]);

  const [data, dispatch] = useReducer(reducer, []);

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
    // setData(initData);
    dispatch({type : "INIT", data : initData})
  }
  //호출된 API를 실행
  useEffect(()=>{
    getData();  
  },[])

  const onCreate = useCallback((author, content, emotion) => {
    dispatch({
      type: "CREATE", 
      data: {author, content, emotion, id: dataId.current}
    })
    dataId.current += 1;
  },[]);

  const onDelete = useCallback((targetId) => {
    dispatch({type: "DELETE", targetId})
  },[]);

  const onEdit = useCallback((targetId, newContent) => {
    dispatch({type: "EDIT", targetId, newContent})
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
    <DiaryStateContext.Provider value={data}>

    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <div>Total Diary number : {data.length}</div>
      <div>Good Diary number : {goodCount}</div>
      <div>Bad Diary number : {badCount}</div>
      <div>Good Diary Ratio : {goodRatio}</div>
      <DiaryList onEdit={onEdit} diaryList={data} onDelete={onDelete} />
    </div>
    </DiaryStateContext.Provider>

  );
}

export default App;


// removed - props drilling 
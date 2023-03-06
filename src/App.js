import { useRef, useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

// const dummyList = [
//   {
//     id: 1,
//     author: "David",
//     content: "Genesis",
//     emotion: 1,
//     created_date: new Date().getTime()
//   },
//   {
//     id: 2,
//     author: "Paul",
//     content: "Exodus",
//     emotion: 2,
//     created_date: new Date().getTime()
//   },
//   {
//     id: 3,
//     author: "Matthew",
//     content: "Luke",
//     emotion: 3,
//     created_date: new Date().getTime()
//   },
//   {
//     id: 4,
//     author: "John",
//     content: "Deutronomy",
//     emotion: 5,
//     created_date: new Date().getTime()
//   },
// ]

function App() {

  const [data, setData] = useState([]);
  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id : dataId.current
    }
    dataId.current += 1;
    setData([newItem, ...data ])
  }

  const onDelete = (targetId) => {
    console.log("삭제되었습니다");
  }

  return (
    <div className="App">
      <DiaryEditor onCreate = {onCreate} />
      <DiaryList onDelete = {onDelete} diaryList = {data} />
    </div>
  );
}

export default App;

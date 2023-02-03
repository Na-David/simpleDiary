import { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

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
      id: dataId.current
    };

    dataId.current += 1;

    setData([newItem, ...data]);
  };

  const onDelete = (targetId) => {
    const newDiaryList = data.filter(
      (it) => it.id !== targetId
    );
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) => it.id === targetId ? {...it, content: newContent} : it)
    )
  }

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} diaryList={data} onDelete={onDelete} />
    </div>
  );
}

export default App;

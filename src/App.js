import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: "David",
    content: "Genesis",
    emotion: 1,
    created_date: new Date().getTime()
  },
  {
    id: 2,
    author: "Paul",
    content: "Exodus",
    emotion: 2,
    created_date: new Date().getTime()
  },
  {
    id: 3,
    author: "Matthew",
    content: "Luke",
    emotion: 3,
    created_date: new Date().getTime()
  },
  {
    id: 4,
    author: "John",
    content: "Deutronomy",
    emotion: 5,
    created_date: new Date().getTime()
  },
]

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList = {dummyList} />
    </div>
  );
}

export default App;

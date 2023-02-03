import {useState} from "react";

const DiaryItem = ({
  onDelete,
  id,
  author,
  content,
  emotion,
  created_date
}) => {

  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => {setIsEdit(!isEdit)};

  const [localContent, setLocalContent] = useState("");

  const handleDelete = () => {
    if (window.confirm(`${id+1}번째 일기를 정말 삭제하시겠습니까?`)) {
     onDelete(id);
    }
  }

  return (
    <div className="DiaryItem">
      <div className="info">
        <span className="author_info">
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEdit ? 
        <>
        <textarea value={localContent} onChange = {(e) => {setLocalContent(e.target.value)}}/>
        </> : 
        <>
        {content}
        </>}
      </div>
      <button onClick={toggleIsEdit}>Edit</button>
      <button onClick={handleDelete}> Delete </button>
    </div>
  );
};

export default DiaryItem;

const DiaryItem = ({ id, author, content, emotion, created_date }) => {
    return (
      <div className="DiaryItem">
        <div className="info">
          <span className="author_info">
            | Author : {author} | Score : {emotion} |
          </span>
          <br />
          <span className="date">{new Date(created_date).toLocaleString()}</span>
        </div>
        <div className="content">{content}</div>
      </div>
    );
  };
  
  export default DiaryItem;
  
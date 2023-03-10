const DiaryItem = ({author, content, created_date, emotion, id, onDelete}) => {
    return (
        <div className="DiaryItem">
            <div className="info">
                <span>작성자 : {author} | 감정점수 : {emotion}</span> <br />
                <span className="date">{new Date(created_date).toLocaleString()}</span>
            </div>
            <div className="content">{content}</div>
            <button onClick={() => {
                console.log(id);
                if (window.confirm("really?")){
                    onDelete(id);
                }
            }}>Delete</button>
        </div>
    )
}

export default DiaryItem;
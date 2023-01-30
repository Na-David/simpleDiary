const DiaryItem = ({author, content, created_date, grade, id}) => {
    return <div className="DiaryItem">
        <div className="info">
            <span>
                Author: {author} | Grade: {grade}<br/>
            </span>
            <span className="date">
                {new Date(created_date).toLocaleString()}
            </span>
            <div className="content">
                {content}
            </div>
        </div>
    </div>;

}

export default DiaryItem;
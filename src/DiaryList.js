const DiaryList = ({diaryList}) => {
    console.log(diaryList);
    return (
        <div className="DiaryList">
            <h2>Diary Lists</h2>
            <h4>There are {diaryList.length} diary(s) in the archive</h4>
            <div>
                {diaryList.map((it) => (
                    <div>
                        <div> Author: {it.author}</div>
                        <div> Content: {it.content}</div>
                        <div> Grade: {it.grade}</div>
                        <div> Date(ms): {it.created_date}</div>
                    </div>
                ))}
            </div>
        </div>
    )
};

DiaryList.defaultProps = {
    diaryList: []
}

export default DiaryList;
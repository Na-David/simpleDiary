const DiaryList = ({diaryList}) => {

    return (
        <div className="DIaryList">
            <h2>일기리스트</h2>
            <h4>총 {diaryList.length}개의 일기가 있습니다.</h4>
            <div>
                {diaryList.map((it, idx) => (
                <div key={idx}>
                    <div>작성자 : {it.author}</div>
                    <div>일기 : {it.content}</div>
                    <div>감정 : {it.emotion}</div>
                    <div>시간 : {it.created_date}</div>
                </div>))}
            </div>
        </div>
    )
}

DiaryList.defaultProps = {
    diaryList: []
};

export default DiaryList;
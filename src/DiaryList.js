import DiaryItem from "./DiaryItem";

const DiaryList = ({diaryList, onDelete}) => {

    return (
        <div className="DIaryList">
            <h2>일기리스트</h2>
            <h4>총 {diaryList.length}개의 일기가 있습니다.</h4>
            <div>
                {diaryList.map((it, idx) => (
                    <DiaryItem onDelete = {onDelete} key={it.id} {...it} />
                ))}
            </div>
        </div>
    )
}

DiaryList.defaultProps = {
    diaryList: []
};

export default DiaryList;
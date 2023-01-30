import DiaryItem from "./DiaryItem";

const DiaryList = ({diaryList}) => {
    console.log(diaryList);
    return (
        <div className="DiaryList">
            <h2>Diary Lists</h2>
            <h4>There are {diaryList.length} diary(s) in the archive</h4>
            <div>
                {diaryList.map((it) => (
                    <DiaryItem key = {it.id} {...it} />
                ))}
            </div>
        </div>
    );
};

DiaryList.defaultProps = {
    diaryList: []
};

export default DiaryList;
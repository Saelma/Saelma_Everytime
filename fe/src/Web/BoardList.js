import React, {useEffect, useState} from 'react';
import "../css/BoardList.css";
import axios from 'axios';

function BoardList() {
    
    const [ data, setData ] = useState();

    useEffect(() => {
        BoardListView();
    },[])

    async function BoardListView() {
        await axios.get('/board/view')
        .then((res)=>{
            console.log(res.data); 
            setData(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div className="App">
            <div className="boardTitle"> {/* 게시판 제목 */}
                자유게시판
            </div>

            <div> {/* 새 글 작성하기*/}
            글을 작성해주세요 칸 
            </div>
                {data ? data.map((datas)=>(
                    <div className="boardview">
                        <div key={datas.no}>
                           <div className="title">{datas.title}</div>  {/* 제목 */}
                            <div className="content">{datas.content}</div> {/* 내용 */}
                                <div className="author">
                                     <span className="time"> {datas.timemonth}/{datas.timedate} {datas.timehours}:{datas.timeminute} </span>
                                     {datas.author}</div>
                                {/* 저자 */}
                        </div>
                    </div>
                )) : ''}
            </div>
      );

}

export default BoardList;
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/BoardList.css";
import axios from 'axios';
import BoardWrite from './BoardWrite';

function BoardList() {
    const [ data, setData ] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        BoardListView();
    },[])

    async function BoardListView() {
        await axios.get('/board/list')
        .then((res)=>{
            console.log(res.data); 
            setData(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const handleBoardView = (id) => {
        navigate(`/board/view/${id}`, {state : { id}});
    }


    return (
        <div>
            <div className="App">
            <div className="boardTitle"> {/* 게시판 제목 */}
                자유게시판
            </div>


            <div> {/* 새 글 작성하기*/}
            <BoardWrite />
            </div>
                {data ? data.map((datas)=>(
                    <div className="boardview" key={datas.id} onClick={() => handleBoardView(datas.id)}>
                           <div className="title">{datas.title}</div>  {/* 제목 */}
                            <div className="content">{datas.content}</div> {/* 내용 */}
                                <div>
                                     <span className="times"> 
                                     {datas.timemonth.toString().padStart(2, '0')}/{datas.timedate.toString().padStart(2, '0')} {datas.timehours.toString().padStart(2, '0')}:{datas.timeminute.toString().padStart(2, '0')} 
                                     </span>
                                     <span className="author">
                                     {datas.author}
                                     </span>
                                     </div>
                                {/* 저자 */}
                    </div>
                )) : ''}
            </div>
            </div>
      );

}

export default BoardList;
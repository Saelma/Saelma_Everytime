import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import "../css/BoardView.css";

const BoardView = () =>{
    const [ data, setData ] = useState();
    const location = useLocation();
    const id = location.state.id;

    useEffect(() => {
        BoardListView();
    },[])

    async function BoardListView() {
        await axios.get(`/board/view/${id}`)
        .then((res)=>{ 
            console.log(res.data); 
            setData(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return(
    
        <div className="freeBoard">
                
                
            <div>
            </div>

            <div>
            <div className="boardTitle"> {/* 게시판 제목 */}
                자유게시판
            </div>
            <div className="boardview">
            {data && <div className="title">{data.title}</div> } 
            {data && <div className="content">{data.content}</div>} 
            </div>
            <div>

            </div>
            </div>

        </div>  

    )
}

export default BoardView;
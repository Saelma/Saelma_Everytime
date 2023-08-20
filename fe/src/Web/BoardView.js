    import React, {useEffect, useState} from 'react';
    import { useLocation } from 'react-router-dom';
    import axios from 'axios';
    import "../css/BoardView.css";
    import ModifyForm from "./ModifyForm"

    const BoardView = () =>{
        const [ data, setData ] = useState();
        const [modifyBoard, setModifyBoard] = useState(false);
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

        async function BoardModify(){
            setModifyBoard(!modifyBoard);
            console.log(modifyBoard);

        }
        return(
        
            <div className="freeBoard">
                    
                <div>
                </div>

                <div>
                <div className="boardTitle"> {/* 게시판 제목 */}
                    자유게시판
                </div>
                {data && modifyBoard ? (
                    <ModifyForm
                    id = {data.id}
                    boardContent = {data.content}
                    boardTitle = {data.title}
                    
                    />  
                ) : (            <div className="boardview">
                {data && <div className="title">{data.title}
                <span><button onClick={BoardModify}> 수정하기 </button></span></div> } 
                {data && <div className="content">{data.content}</div>}
                </div>)} 
                <div>
                </div>
                </div>

            </div>  

        )
    }

    export default BoardView;
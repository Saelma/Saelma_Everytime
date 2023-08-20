    import React, {useEffect, useState} from 'react';
    import { useLocation, useNavigate} from 'react-router-dom';
    import axios from 'axios';
    import "../css/BoardView.css";
    import ModifyForm from "./ModifyForm"

    const BoardView = () =>{
        const [ data, setData ] = useState();
        const [modifyBoard, setModifyBoard] = useState(false);
        const location = useLocation();
        const navigate = useNavigate();
        const id = location.state.id;

        useEffect(() => {
            BoardListView();
        },[])

        const BoardListView = async () => {
            await axios.get(`/board/view/${id}`)
            .then((res)=>{ 
                console.log(res.data);
                setData(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
        }

        const BoardModify = async () => {
            setModifyBoard(!modifyBoard);
            console.log(modifyBoard);

        }

        const handleDelete = async (id) => {
            const response = await fetch(`/board/delete/${id}`, {
                method: 'GET',
              });
              alert("글 삭제가 완료되었습니다.");
              navigate(`/board/list`);
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
                <button onClick={() => handleDelete(data.id)}>삭제</button>
                </div>)} 
                <div>
                </div>
                </div>

            </div>  

        )
    }

    export default BoardView;
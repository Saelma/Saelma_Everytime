import React ,{useState} from 'react';
import "../css/BoardWrite.css";
import WriteForm from "./WriteForm"

function BoardWrite(){
    const [textWrite, setTextWrite] = useState(false);
    
    const WriteBox = () => {
        setTextWrite(true);
    }

    return(

        <div>
            {textWrite ? (
                <WriteForm /> 
            ) : (
                <div className="writetext" onClick={WriteBox}>
                <input type="text" className="writeinput" placeholder='새 글을 작성해주세요!'></input>
                </div>
    )}    
    </div>
    );
    

}

export default BoardWrite;
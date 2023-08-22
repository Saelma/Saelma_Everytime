import React, { useState} from "react";
import "../css/WriteForm.css";
import writeImage from "../img/write.png";
import Hashtag from "../img/샾.png";
import ClipFile from "../img/File.png";

function WriteForm() {
  const [questionBoard, setQuestionBoard] = useState(false);
  const [anonyBoard, setAnonyBoard] = useState(false);
  const [author, setAuthor] = useState('');

  const handleQuestion = () => {
    setQuestionBoard(!questionBoard);
  }

  const anonySetting = () => {
    setAnonyBoard(!anonyBoard);
  }

  const anonySubmit = () => {
    if(anonyBoard){
      setAuthor('익명')
    }else{
      setAuthor('');
    }
  }

  return (
    <div className="writeForm">
      <form className="write" action="/board/writedo" method="post">
        <div>
          <input name="title" className="writeTitle " placeholder="글 제목"></input>
        </div>

        <hr color="#E3E3E3"></hr>

        <div className="textplace">
          <textarea name="content" className="writeText" placeholder="에브리타임"></textarea>
        </div>

        <hr color="#E3E3E3" style={{ margin: "0" }}></hr>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <button type="button" className="submitForm">
              <img
                src={Hashtag}
                alt="해시태그"
                style={{
                  width: "25px",
                  cursor: "pointer",
                  paddingBottom: "5px",
                  paddingLeft: "5px",
                }}
              />
            </button>

            <button type="button" className="submitForm">
              <img
                src={ClipFile}
                alt="파일첨부"
                style={{
                  width: "35px",
                  cursor: "pointer",
                  paddingTop: "4px",
                  paddingBottom: "2px",
                  paddingLeft: "5px",
                }}
              />
            </button>

            </div>

          <div className="checkboxSpace">

          <input type="checkbox" className="questionCheckbox" onChange={handleQuestion}/>
          
          {questionBoard ? (<label className="checkboxLabel" style={{color:"#36A0CA"}}> 질문</label>) : ( <label className="checkboxLabel"> 질문</label>) }  


          <input type="hidden" name="author" value={author} />

          <input type="checkbox" className="anonyCheckbox" onChange={anonySetting} />
          {anonyBoard ? (<label className="checkboxLabel" style={{color:"#A60406"}}> 익명</label>) : (<label className="checkboxLabel"> 익명</label>) }
          </div>

          <button
            type="submit"
            className="submitForm"
            style={{ display: "inline-block" }}
            onClick={anonySubmit}
          >
            <img
              src={writeImage}
              alt="제출"
              style={{
                width: "40px",
                cursor: "pointer",
              }}
            />
          </button>
        </div>
      </form>
    </div>
  );
}

export default WriteForm;

import { useNavigate } from 'react-router-dom';
import '../css/Header.css';
import EverytimeLogo from '../img/nav.logo.png'
import Person from '../img/person.png';
import Chat from '../img/chat.png';

function Header(){
    const navigate = useNavigate();
    const BoardNavigate = () => {
        navigate('/board/list');
    }
    
    
    return(
        <div className="headerItems">
            <img src={EverytimeLogo} className="Logo" alt="파일첨부"
            style={{
                  width: "40px",
                  cursor: "pointer",
                  paddingTop: "4px",
                  paddingBottom: "20px",
                  paddingLeft: "5px",
                  marginLeft: "0",
                }}
              />
              <span className="logoTitle">
                에브리타임 
                <div className="logoUniv">
                    협성대
                    </div>
              </span>
              <span className="headerTitle">
            <span className="headerLink" onClick={BoardNavigate}>
                게시판
            </span>
            <span className="headerLink">
                시간표
            </span>
            <span className="headerLink">
                강의실
            </span>
            <span className="headerLink">
                학점계산기
            </span>
            <span className="headerLink">
                친구
            </span>
            <span className="headerLink">
                책방
            </span>
            <span className="headerLink">
                캠퍼스픽
            </span>
            </span>

            <img src={Chat} className="imgCss" alt="Chat" style={{
                  width: "25px",
                  height: "30px",
                  cursor: "pointer",
                  paddingTop: "5px",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                  paddingBottom: "5px",
                  marginLeft: "0",
                  marginRight: "3px",
                }} />
            <img src={Person} className="imgCss" alt="Person" style={{
                  width: "25px",
                  height: "30px",
                  cursor: "pointer",
                  paddingTop: "5px",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                  paddingBottom: "5px",
                  marginLeft: "0",
                }}/>
        </div>
    )

}

export default Header;
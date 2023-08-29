import '../css/Header.css';
import EverytimeLogo from '../img/nav.logo.png'


function Header(){
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
            <span>
                게시판
            </span>
            <span>
                시간표
            </span>
            <span>
                강의실
            </span>
            <span>
                학점계산기
            </span>
            <span>
                친구
            </span>
            <span>
                책방
            </span>
            <span>
                캠퍼스픽
            </span>
            </span>
        </div>

    )

}

export default Header;
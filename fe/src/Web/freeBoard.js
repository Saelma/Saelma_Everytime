import BoardList from "./BoardList";
import "../css/freeBoard.css";
import Header from './Header';

function freeBoard() {
    return(
        <div>
            <div>
                <span className="header"> 
            <Header />
            </span>
            <span className="freeBoard">
            <BoardList />
            </span>
            </div>
         </div>
    );
}

export default freeBoard;
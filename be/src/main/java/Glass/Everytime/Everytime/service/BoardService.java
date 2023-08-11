package Glass.Everytime.Everytime.service;

import Glass.Everytime.Everytime.Entity.free_table;
import Glass.Everytime.Everytime.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardService {
    @Autowired
    private BoardRepository boardRepository;

    public List<free_table> boardView(){
        return boardRepository.findAll();
    }

    public void write(free_table Free_table) throws Exception{
        boardRepository.save(Free_table);
    }
//
//    public Page<free_table> boardList(Pageable pageable){
//        return boardRepository.findAll(pageable);
//    }
//    //Board라는 class가 담긴 list를 찾아 반환, 매개변수가 없으면 public list여도 매개변수를 pagealbe로 주면 public pageable로 바뀜
//
//    public free_table boardContent(Integer id){
//        return boardRepository.findById(id).get();
//    }


//    public void boardDelete(Integer id){
//        boardRepository.deleteById(id);
//    }
//
//    public Page<free_table> boardSearchList(String searchKeyword, Pageable pageable){
//        return boardRepository.findByTitleContaining(searchKeyword, pageable);
//    }

}

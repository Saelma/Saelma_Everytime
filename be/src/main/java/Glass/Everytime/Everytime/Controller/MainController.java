package Glass.Everytime.Everytime.Controller;

import Glass.Everytime.Everytime.Entity.free_table;
import Glass.Everytime.Everytime.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.view.RedirectView;

import java.util.List;

@RestController
public class MainController {

    @Autowired
    private BoardService boardService;

    @GetMapping("/board/list")
    public List<free_table> getBoardList(){
        return boardService.boardList();
    }

    @PostMapping("/board/writedo")
    public RedirectView boardWrite(Model model, free_table freeTable) throws Exception{
        boardService.write(freeTable);
        return new RedirectView("http://localhost:3000/board/list");

    }
    @GetMapping("/board/delete/{id}")
    public RedirectView boardDelete(Model model, @PathVariable Integer id){
        boardService.boardDelete(id);
        return new RedirectView("http://localhost:3000/board/list");
    }

    @GetMapping("/board/view/{id}")
    public free_table boardView(Model model, @PathVariable Integer id){
        model.addAttribute("board",boardService.boardView(id));
        return boardService.boardView(id);
    }

    @PostMapping("board/update/{id}")
    public RedirectView boardupdate(
            @PathVariable("id") Integer id, free_table freeTable, Model model)
            throws Exception{

        free_table boardTemp = boardService.boardView(id);
        boardTemp.setTitle(freeTable.getTitle());
        boardTemp.setContent(freeTable.getContent());

        boardService.write(boardTemp);

        return new RedirectView("http://localhost:3000/board/list");
    }
//
//    @GetMapping("/board/list")
//    public String boardlist(Model model,
//                            @PageableDefault(page = 0, size = 10, sort="id", direction = Sort.Direction.DESC)
//                            Pageable pageable, String searchKeyword) {
//        // 데이터를 담아 페이지로 보내기 위해 Model 자료형을 인자로 함
//        // 검색할 때 (searchKeyword) 가 있는지 구분하며 사용
//
//        Page<free_table> list = null;
//
//        if(searchKeyword != null){
//            list = boardService.boardSearchList(searchKeyword, pageable);
//        } else {
//            list = boardService.boardList(pageable);
//        }
//
//        int nowPage = list.getPageable().getPageNumber() + 1; // 현재 페이지를 가져옴, 0에서 시작하는 처리를 위해 + 1
//        int startPage = Math.max(nowPage -4, 1);
//        int endPage = Math.min(nowPage + 5, list.getTotalPages()); // totalPage보다 크면 안 되기에 두개중 최소값 반환
//
//
//        model.addAttribute("list",list);
//        model.addAttribute("nowPage", nowPage);
//        model.addAttribute("startPage", startPage);
//        model.addAttribute("endPage", endPage);
//        return list.toString();
//    }

}

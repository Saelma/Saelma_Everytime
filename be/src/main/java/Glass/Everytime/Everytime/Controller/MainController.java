package Glass.Everytime.Everytime.Controller;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {
    @GetMapping("/api/hello")
    public String main() {
        return "이제 시작이다,,";
    }
}

package Glass.Everytime.Everytime.Entity;


import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class free_table {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String title;
    private String content;
    private String filename;
    private String filepath;
    private String author;

    private Integer timemonth;
    private Integer timedate;
    private Integer timehours;
    private Integer timeminute;

}

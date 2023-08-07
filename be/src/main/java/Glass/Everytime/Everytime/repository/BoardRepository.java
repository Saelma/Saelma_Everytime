package Glass.Everytime.Everytime.repository;

import Glass.Everytime.Everytime.Entity.free_table;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardRepository extends JpaRepository<free_table, Integer> {
    Page<free_table> findByTitleContaining(String searchKeyword, Pageable pageable);
}


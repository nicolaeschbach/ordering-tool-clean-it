package ch.eschbach.cleanit.orderingToolServer.persistence;


import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@Transactional
public class CustomerRepositoryTest {

    @Autowired
    private OrderRepository repo;

    private long totalNumberofCustomers;

    @BeforeEach
    public void setUp() {
        totalNumberofCustomers = repo.count();
    }

    @Test
    public void testCount() {
        System.out.println(totalNumberofCustomers);
        assertEquals(totalNumberofCustomers, repo.count());
    }
}

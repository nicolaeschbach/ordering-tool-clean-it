package ch.eschbach.cleanit.orderingToolServer.persistence;

import ch.eschbach.cleanit.orderingToolServer.model.Customer;
import ch.eschbach.cleanit.orderingToolServer.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findOrderByCustomerIs(Customer customer);
}

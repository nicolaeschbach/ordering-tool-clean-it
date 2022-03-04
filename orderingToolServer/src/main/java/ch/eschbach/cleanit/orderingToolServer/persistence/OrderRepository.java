package ch.eschbach.cleanit.orderingToolServer.persistence;

import ch.eschbach.cleanit.orderingToolServer.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}

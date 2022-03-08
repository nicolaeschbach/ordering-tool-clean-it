package ch.eschbach.cleanit.orderingToolServer.persistence;

import ch.eschbach.cleanit.orderingToolServer.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}

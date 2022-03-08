package ch.eschbach.cleanit.orderingToolServer.services;

import ch.eschbach.cleanit.orderingToolServer.model.Customer;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
@Transactional
public class CustomerServiceTest {

    @Autowired
    private CustomerService customerService;

    @Test
    public void testGetAllCustomers() {
        List<Customer> customers = customerService.getAllCustomers();
        assertEquals(3, customers.size());
    }

    @Test
    public void testGetCustomerById() {
        Customer customer = customerService.getCustomerById(1L);
        assertEquals("Schmutz", customer.getName());
    }

    @Test
    public void testDeleteCustomer() {
        List<Customer> customers = customerService.getAllCustomers();
        assertEquals(3, customers.size());
        Customer customer = customers.get(0);
        customerService.deleteCustomer(customer);
        customers = customerService.getAllCustomers();
        assertEquals(2, customers.size());

    }
}

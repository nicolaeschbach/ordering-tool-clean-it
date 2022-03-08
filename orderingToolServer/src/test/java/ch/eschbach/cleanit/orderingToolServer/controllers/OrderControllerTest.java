package ch.eschbach.cleanit.orderingToolServer.controllers;

import ch.eschbach.cleanit.orderingToolServer.model.Customer;
import ch.eschbach.cleanit.orderingToolServer.model.Order;
import ch.eschbach.cleanit.orderingToolServer.services.CustomerService;
import ch.eschbach.cleanit.orderingToolServer.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.util.Arrays;

@WebMvcTest(controllers = OrderController.class)
@EntityScan
public class OrderControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private OrderService orderServiceMock;

    @MockBean
    private CustomerService customerServiceMock;

    @Autowired
    private ObjectMapper mapper;

    @Test
    public void getAllOrders_ReturnOK() throws Exception {
        Customer c1 = new Customer(1L, "Keller", "Hans");
        Customer c2 = new Customer(2L, "Sauber", "Peter");
        Order o1 = new Order(c1, 3.0, LocalDate.now());
        Order o2 = new Order(c2, 4.0, LocalDate.now());
        o1.setId(1L);
        o2.setId(2L);
        when(orderServiceMock.getAllOrders()).thenReturn(Arrays.asList(o1, o2));

        mockMvc.perform(get("/orders").header("Accept", "application/json"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].id", is(1)))
                .andExpect(jsonPath("$[0].dryWeightKg", is(3.0)));
    }

    @Test
    public void createNewOrders_ReturnOK() throws Exception {
        Customer c1 = new Customer(1L, "Keller", "Hans");
        when(customerServiceMock.getCustomerById(1L)).thenReturn(c1);

        CreateOrderData newOrder = new CreateOrderData(1L, 3.0);

        mockMvc.perform(post("/orders").contentType(MediaType.APPLICATION_JSON).content(mapper.writer().writeValueAsString(newOrder)))
                .andExpect(status().isCreated());
    }
}

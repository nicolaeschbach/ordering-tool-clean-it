package ch.eschbach.cleanit.orderingToolServer.controllers;

import ch.eschbach.cleanit.orderingToolServer.model.Customer;
import ch.eschbach.cleanit.orderingToolServer.model.Order;
import ch.eschbach.cleanit.orderingToolServer.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/orders")
@CrossOrigin
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = orderService.getAllOrders();
        if (orders == null || orders.size() == 0) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Order> createOrder(@Valid @RequestBody CreateOrderData data, BindingResult result) {
        if (result.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_ENTITY);
        }
        Customer customer = new Customer(data.customerId,"Static name","Static surname", new ArrayList<>());
        Order order = orderService.save(new Order(customer, data.dryWeightKg, LocalDate.now()));
        System.out.println(data.dryWeightKg);
        return new ResponseEntity<>(order, HttpStatus.CREATED);

    }
}

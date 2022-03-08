package ch.eschbach.cleanit.orderingToolServer.services;

import ch.eschbach.cleanit.orderingToolServer.model.Order;
import ch.eschbach.cleanit.orderingToolServer.persistence.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class OrderService {

    @Autowired
    private OrderRepository orderRepo;

    public Order getOrderById(Long id) {
        return orderRepo.findById(id).orElse(null);
    }

    public Order save(Order order) {
        order = orderRepo.save(order);
        return order;
    }

    public List<Order> getAllOrders() {
        List<Order> orders = orderRepo.findAll();
        return orders;
    }

    public void deleteOrder(Order order) {
        if (order == null) {
            throw new RuntimeException("order parameter not set");
        }
        order = orderRepo.save(order);
        order.getCustomer().getOrders().remove(order);
        orderRepo.delete(order);

    }

}

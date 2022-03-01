package ch.eschbach.cleanit.orderingToolServer.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.time.LocalDate;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @Column(name = "ORDER_ID", nullable = false)
    private Long
            id;

    @ManyToOne
    @JoinColumn(name = "CUSTOMER_ID")
    public Customer customer;

    @Column(name = "ORDER_DATE")
    private LocalDate orderDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}

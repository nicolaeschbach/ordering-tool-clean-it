package ch.eschbach.cleanit.orderingToolServer.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonUnwrapped;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.time.LocalDate;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ORDER_ID", nullable = false)
    private Long
            id;

    @Column(name = "ORDER_DATE")
    private LocalDate orderDate;

    @Column(name = "DRY_WEIGHT_KG")
    private double dryWeightKg;

    @ManyToOne
    @JoinColumn(name = "CUSTOMER_ID")
    public Customer customer;

    @Column(name = "ORDERSTATUS", columnDefinition = "varchar(32) default 'Received'")
    @Enumerated(EnumType.STRING)
    public OrderStatus status;

    public LocalDate getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(LocalDate orderDate) {
        this.orderDate = orderDate;
    }

    public double getDryWeightKg() {
        return dryWeightKg;
    }

    public void setDryWeightKg(double dryWeightKg) {
        this.dryWeightKg = dryWeightKg;
    }

    public Order(Customer customer, double dryWeightKg,LocalDate orderDate) {
        this.dryWeightKg = dryWeightKg;
        this.customer = customer;
        this.orderDate = orderDate;
    }

    public Order() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}

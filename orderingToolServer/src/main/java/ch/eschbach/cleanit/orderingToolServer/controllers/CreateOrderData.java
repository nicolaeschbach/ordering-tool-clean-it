package ch.eschbach.cleanit.orderingToolServer.controllers;

import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotNull;

public class CreateOrderData {
    @NotNull
    public final Long customerId;
    @DecimalMin("0.0")
    public final double dryWeightKg;

    public CreateOrderData(Long customerId, double dryWeightKg) {
        this.customerId = customerId;
        this.dryWeightKg = dryWeightKg;
    }
}

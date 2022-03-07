package ch.eschbach.cleanit.orderingToolServer.model;

public enum OrderStatus {
    Received(0),
    Cleaned(1),
    Returned(2);

    public final int id;

    OrderStatus(int id) {
        this.id = id;
    }
}

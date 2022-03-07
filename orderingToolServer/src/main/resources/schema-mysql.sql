create table orders
(
    order_id      bigint not null auto_increment,
    order_date    date,
    dry_weight_kg integer,
    primary key (order_id)
);

create table customers
(
    customer_id        bigint not null auto_increment,
    customer_name      varchar(255),
    customer_firstname varchar(255),
    primary key (customer_id)
);


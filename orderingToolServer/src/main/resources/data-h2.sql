INSERT INTO CUSTOMERS (CUSTOMER_ID, CUSTOMER_NAME, CUSTOMER_FIRSTNAME) VALUES (1, 'Schmutz', 'Herbert');
INSERT INTO CUSTOMERS (CUSTOMER_ID, CUSTOMER_NAME, CUSTOMER_FIRSTNAME) VALUES (2, 'Sauber', 'Peter');
INSERT INTO CUSTOMERS (CUSTOMER_ID, CUSTOMER_NAME, CUSTOMER_FIRSTNAME) VALUES (3, 'White', 'Thomas');

INSERT INTO ORDERS (ORDER_ID, ORDER_DATE, CUSTOMER_ID, DRY_WEIGHT_KG, ORDERSTATUS) VALUES (1, '2022-02-23', 1, 4, 'Returned');
INSERT INTO ORDERS (ORDER_ID, ORDER_DATE, CUSTOMER_ID, DRY_WEIGHT_KG) VALUES (2, '2022-02-28', 2, 4);
INSERT INTO ORDERS (ORDER_ID, ORDER_DATE, CUSTOMER_ID, DRY_WEIGHT_KG) VALUES (3, '2022-03-07', 3, 4);
INSERT INTO ORDERS (ORDER_ID, ORDER_DATE, CUSTOMER_ID, DRY_WEIGHT_KG) VALUES (4, '2022-03-07', 1, 4);

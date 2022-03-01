package ch.eschbach.cleanit.orderingToolServer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication
public class OrderingToolServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(OrderingToolServerApplication.class, args);
	}

}

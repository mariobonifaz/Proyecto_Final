package ramosfonbon.northwind;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

//@EnableJpaRepositories("ramosfonbon.northwind.repositorySimple")
//@EntityScan("ramosfonbon.northwind..modelSimple")
@SpringBootApplication
public class NorthwindApplication {

	public static void main(String[] args) {
		SpringApplication.run(NorthwindApplication.class, args);
	}

}

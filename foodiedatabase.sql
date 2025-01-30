CREATE DATABASE foodie;
USE foodie;

CREATE TABLE Restaurants (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL
);

CREATE TABLE Dishes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    restaurant_id INT,
    FOREIGN KEY (restaurant_id) REFERENCES Restaurants(id) ON DELETE CASCADE
);

INSERT INTO Restaurants (name, location) VALUES
('Greasy Grove', 'Manchester'),
('Pizza Place', 'Manchester'),
('Sushi Shop', 'Leeds'),
('Tomato Town', 'Leeds');

INSERT INTO Dishes (name, price, restaurant_id) VALUES
('Beef Burger', 2.99, 1),
('Cheeseburger', 3.99, 1),
('Pepperoni Pizza', 9.99, 2),
('Veggie Pizza', 8.99, 2),
('California Roll', 4.99, 3),
('Edamame', 1.99, 3),
('Penne Pasta', 1.99, 4),
('Spaghetti Bolognaise', 3.99,4);

SELECT Dishes.name FROM foodie WHERE price > 4.99;
SELECT * FROM Dishes WHERE restaurant_id = 1;
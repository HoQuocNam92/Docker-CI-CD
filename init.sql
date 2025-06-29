-- Tạo database nếu chưa có (phòng khi cấu hình MYSQL_DATABASE không đủ)
CREATE DATABASE IF NOT EXISTS bai3;
USE bai3;

-- Tạo bảng users
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tạo bảng products
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tạo bảng orders
CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Thêm dữ liệu mẫu
INSERT INTO users (username, password, email)
VALUES ('nam123', 'matkhau123', 'nam@example.com');

INSERT INTO products (name, price, description)
VALUES 
('iPhone 15', 25000000, 'Điện thoại Apple mới nhất'),
('Samsung S24', 21000000, 'Điện thoại Samsung cao cấp');

INSERT INTO orders (user_id, total)
VALUES (1, 46000000);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(500),
    password TEXT

);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INT references users(id),
    title VARCHAR(200), 
    img TEXT,
    content TEXT

);

SELECT * FROM users;
SELECT * FROM posts;
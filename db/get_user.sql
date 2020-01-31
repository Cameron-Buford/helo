SELECT * FROM posts
JOIN users ON users.id = posts.user_id
WHERE posts.id = $1;
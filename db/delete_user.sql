DELETE FROM users
WHERE user_id = $1;
SELECT * FROM users;
-- Select all columns from table
SELECT * FROM users;

-- Select some columns from table
SELECT username, email FROM users;

-- Select distinct (non-duplicate) rows
SELECT DISTINCT age FROM users;
SELECT DISTINCT age, email FROM users;  -- distinct age-email combos => possible duplicate ages
SELECT COUNT(DISTINCT age) FROM users;  -- count how many distinct ages there are

-- Aliasing (nicknaming) columns
SELECT country AS nationality FROM users;
SELECT country AS "User's Country of Origin" FROM users;  -- double quotes for column names with spaces

-- Filtering rows
SELECT * FROM users WHERE age >= 18;
SELECT * FROM users WHERE age >= 18 AND country = 'Singapore';  -- single quotes for plain text
SELECT * FROM users WHERE age < 18 OR NOT country = 'Singapore';

SELECT * FROM users WHERE age BETWEEN 18 AND 21;
SELECT * FROM users WHERE country IN ('Singapore', 'Malaysia');

SELECT * FROM users WHERE created_at >= '2025-01-31';
SELECT * FROM users WHERE created_at BETWEEN '2025-01-30' AND '2025-01-31';
SELECT * FROM users WHERE DATE(created_at) = CURDATE();

SELECT * FROM users WHERE email LIKE '%@_mail.com';  -- _ => any 1 char; % => any 0 or more chars
SELECT * FROM users WHERE username IS NULL;

-- Sorting rows
SELECT * FROM users ORDER BY age;                  -- default ascending order
SELECT * FROM users ORDER BY email;                -- alphabetical order
SELECT * FROM users ORDER BY age, email;           -- sort first by age, then by email
SELECT * FROM users ORDER BY age ASC, email DESC;  -- ascending/decending order

-- Limiting rows
SELECT * FROM users LIMIT 10;
SELECT * FROM users LIMIT 10 OFFSET 5;  -- skip first 5 rows; return rows 11-21

-- Group by column
SELECT age, COUNT(*) AS count
FROM users
GROUP BY age;  -- returns 1 row per distinct age

SELECT age, username  -- ERROR: username is ambiguous (which username to show?)
FROM users
GROUP BY age;

SELECT age, MIN(username)  -- FIX: specify a username to show
FROM users
GROUP BY age;

-- Group by multiple columns
SELECT
    age,
    SUBSTRING_INDEX(email, '@', -1) AS email_domain,
    COUNT(*) AS count
FROM users
GROUP BY age, email_domain;  -- group by distinct age-domain combos

-- Filtering groups
SELECT age, COUNT(*) AS count
FROM users
GROUP BY age
HAVING count > 5;  -- only return groups with 5 or more users

SELECT age, COUNT(*) AS count
FROM users
WHERE age >= 18   -- first filter rows
GROUP BY age      -- then group filtered rows
HAVING count > 5  -- then filter groups
ORDER BY count;   -- then sort groups

-- Groups + CASE
SELECT
    CASE
        WHEN age >= 18 THEN 'Adult'
        ELSE 'Child'
        END AS age_group,
    COUNT(*) AS count
FROM users
GROUP BY age_group;  -- returns number of users per age group

-- Groups + JOIN
SELECT
    u.username,
    COUNT(o.order_id) AS total_orders
FROM users AS u
LEFT JOIN orders AS o     -- LEFT JOIN ensures users with no orders still appear (COUNT(...) = 0)
    ON u.email = o.email
GROUP BY u.username;      -- returns number of orders per user

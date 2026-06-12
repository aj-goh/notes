-- Subquery in WHERE
SELECT username, age
FROM users
WHERE age > (                   -- show users older than average age
    SELECT AVG(age) FROM users  -- subquery returns only one value
);

-- Subquery + IN
SELECT username
FROM users
WHERE email IN (              -- show users who have orders
    SELECT email FROM orders  -- subquery returns list of values
);

SELECT username
FROM users
WHERE email NOT IN (  -- caution: if subquery contains NULL => can break NOT IN (safer to use EXISTS)
    SELECT email FROM orders
);

-- Subquery + EXISTS
SELECT username
FROM users AS u
WHERE EXISTS (  -- checks if at least 1 matching email exists per user
    SELECT 1
    FROM orders AS o
    WHERE o.email = u.email
);

-- Subquery in SELECT
SELECT 
    username,
    (
        SELECT COUNT(*)
        FROM orders o
        WHERE o.email = u.email
    ) AS total_orders  -- like GROUP BY + JOIN but different style
FROM users u;          -- returns number of orders per user

-- Subquery in FROM (derived table)
SELECT username, total_orders
FROM (
    SELECT 
        u.username,
        COUNT(o.order_id) AS total_orders
    FROM users u
    LEFT JOIN orders o ON u.email = o.email
    GROUP BY u.username
) AS t                   -- important: derived table must have an alias
WHERE total_orders > 1;  -- returns users with more than 1 order

-- Correlated subqueries
SELECT username
FROM users u
WHERE (
    SELECT COUNT(*)
    FROM orders o
    WHERE o.email = u.email  -- u.email comes from the outer query
) > 1;                       -- hence subquery must be run for each row of users

-- Nested subqueries
SELECT username
FROM users AS u
WHERE NOT EXISTS (                              -- checks for challenges the user has completed
    SELECT challenge_id                         -- keeps the user if no uncompleted challenges exist
    FROM challenges AS c
    WHERE NOT EXISTS (                          -- checks for completions for the challenge by the user
        SELECT 1                                -- keeps the challenge if the user has not completed it
        FROM completions AS comp
        WHERE comp.username = u.username
        AND comp.challenge_id = c.challenge_id
    )
);                                              -- returns users who completed all challenges

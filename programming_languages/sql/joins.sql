-- Inner join: Returns only rows that have matching values in both tables
SELECT u.username, o.id
FROM users AS u
INNER JOIN orders AS o ON o.email = u.email;
/*
(John, 1001)  <-- only matching emails appear
*/

-- Left join: Returns all rows from the FROM table, and only the matched rows from the JOIN table
SELECT u.username, o.id
FROM users AS u
LEFT JOIN orders AS o ON o.email = u.email;
/*
(John, 1001)
(Jane, NULL)  <-- users without orders => NULL
*/

-- Right join: Returns all rows from the JOIN table, and only the matched rows from the FROM table
SELECT u.username, o.id
FROM users AS u
RIGHT JOIN orders AS o ON o.email = u.email;
/*
(John, 1001)
(NULL, 1002)  <-- orders without users => NULL
*/

-- Full join: Returns all rows when there is a match in either the FROM or JOIN table
SELECT u.username, o.id
FROM users AS u
LEFT JOIN orders AS o ON o.email = u.email;
UNION  -- MySQL doesn't support FULL JOIN => simulate with UNION
SELECT u.username, o.id
FROM users AS u
RIGHT JOIN orders AS o ON o.email = u.email;
/*
(John, 1001)
(Jane, NULL)  <-- both sides' unmatched rows included
(NULL, 1002)  <--
*/

-- Cross join: Returns all combinations of FROM and JOIN table columns
SELECT u.username, c.challenge
FROM users AS u
CROSS JOIN challenges AS c;
/*
(John, read)  <-- 2 users x 2 challenges = 4 combinations
(John, yoga)  <--
(Jane, read)  <--
(Jane, yoga)  <--
*/

-- Self join: The same table joined with itself
SELECT child.name AS employee, parent.name AS manager
FROM users AS child
LEFT JOIN users AS parent ON child.managed_by = parent.id;
/*
(John, Jane)  <-- John's manager is Jane
(Jane, NULL)  <-- Jane has no manager
*/

-- Using multiple joins in one query
SELECT u.username, o.id, p.name
FROM users AS u
INNER JOIN orders AS o ON u.email = o.email
INNER JOIN products AS p ON o.product_id = p.id;
/*
(John, 1001, Book)
*/

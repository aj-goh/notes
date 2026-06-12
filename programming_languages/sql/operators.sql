-- Arithmetic operators
SELECT 5 + 2;  -- addition
SELECT 5 - 2;  -- subtraction
SELECT 5 * 2;  -- multiplication
SELECT 5 / 2;  -- division
SELECT 5 % 2;  -- modulus

-- Comparison operators
SELECT * FROM users WHERE age = 18;   -- equal to
SELECT * FROM users WHERE age > 18;   -- greater than
SELECT * FROM users WHERE age < 18;   -- less than

SELECT * FROM users WHERE age >= 18;  -- greater than or equal to
SELECT * FROM users WHERE age <= 18;  -- less than or equal to

SELECT * FROM users WHERE age <> 18;  -- not equal to (official)
SELECT * FROM users WHERE age != 18;  -- not equal to (unofficial)

-- Logical operators
SELECT * FROM users WHERE age >= 18 AND country = 'Singapore';  -- and
SELECT * FROM users WHERE age >= 18 OR country = 'Singapore';   -- or
SELECT * FROM users WHERE NOT age >= 18;                        -- not

SELECT * FROM users WHERE age BETWEEN 18 AND 21;                -- between
SELECT * FROM users WHERE country IN ('Singapore', 'Malaysia'); -- in
SELECT * FROM users WHERE email LIKE '%@gmail.com';             -- like

SELECT * FROM users WHERE username IS NULL;                     -- is / is not
SELECT * FROM users WHERE (age < 18) IS TRUE;
SELECT * FROM users WHERE (age < 18) IS FALSE;
SELECT * FROM users WHERE (age < 18) IS UNKNOWN;                -- age IS NULL => (age < 18) IS UNKNOWN

-- Numeric functions
SELECT * FROM users ORDER BY RAND();  -- random number 0 <= N < 1
SELECT COUNT(*) FROM users;           -- count

SELECT MIN(age) FROM users;           -- minimum
SELECT MAX(age) FROM users;           -- maximum
SELECT AVG(age) FROM users;           -- average
SELECT SUM(age) FROM users;           -- sum

SELECT CEIL(3.14159);                 -- ceiling
SELECT FLOOR(3.14159);                -- floor
SELECT ROUND(3.14159, 2);             -- round to N decimal places

SELECT MOD(5, 2);                     -- modulus
SELECT ABS(-5);                       -- absolute value

-- Date functions
SELECT NOW();                                 -- current date + time
SELECT CURDATE();                             -- current date
SELECT CURTIME();                             -- current time

SELECT DATEDIFF('2025-01-30', '2025-01-31');  -- date difference
SELECT TIMEDIFF('01:23:45', '12:34:56');      -- time difference
SELECT DAYNAME('2025-01-31');                 -- name of weekday

-- String functions
SELECT LENGTH('Hello World');                       -- length of string in bytes
SELECT CHAR_LENGTH('Hello World');                  -- length of string in characters

SELECT LOWER('Hello World');                        -- convert string to lowercase
SELECT UPPER('Hello World');                        -- convert string to uppercase

SELECT REVERSE('Hello World');                      -- reverse string
SELECT REPEAT('Hello World', 3);                    -- repeat string
SELECT SPACE(3);                                    -- repeat spaces

SELECT SUBSTRING('Hello World', 1, 5);              -- extract substring from position M (1-indexed) for length N
SELECT SUBSTRING_INDEX('john@gmail.com', '@', -1);  -- extract substring before/after Nth occurrence of delimiter

SELECT CONCAT('Hello ', 'World');                   -- concatenate 2 or more expressions
SELECT CONCAT_WS(' ', 'Hello', 'World');            -- concatenate with separator

-- Advanced functions
SELECT COALESCE(email, 'NIL') FROM users;           -- returns first non-null value in a list
SELECT IF(age >= 18, 'Adult', 'Child') FROM users;  -- returns value based on condition

SELECT USER();                                      -- returns current username and hostname
SELECT DATABASE();                                  -- returns current database name
SELECT VERSION();                                   -- returns current MySQL version

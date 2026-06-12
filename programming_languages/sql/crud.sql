-- Create row and insert values to all columns
INSERT INTO users
VALUES ('John', 'john@gmail.com', 18, 'Singapore');  -- order of values = order of table columns

-- Create row and insert values to specified columns
INSERT INTO users (username, email, age)
VALUES ('John', 'john@gmail.com', 18);  -- unspecified column values default to null

-- Create multiple rows
INSERT INTO users (username, email, age)
VALUES
    ('John', 'john@gmail.com', 18),  -- separate rows with commas
    ('Jane', 'jane@gmail.com', 17),
    ('Alex', 'Alex@gmail.com', 19);

-- Create row, but update on duplicate key
INSERT INTO users (username, email, age)
VALUES ('John', 'john@gmail.com', 18)
ON DUPLICATE KEY UPDATE email = 'john@gmail.com', age = 18;

-- Create row, but delete and replace on duplicate key
REPLACE INTO users (username, email, age)
VALUES ('John', 'john@gmail.com', 18);

-- Create row, but skip on duplicate key
INSERT IGNORE INTO users (username, email, age)
VALUES ('John', 'john@gmail.com', 18);

-- Insert values from another table
INSERT INTO adults (username, email, country)
SELECT username, email, country FROM users WHERE age >= 18;

-- Update row
UPDATE users
SET username = 'John2'
WHERE username = 'John';

UPDATE users
SET age = age + 1;  -- no WHERE clause => update ALL rows

-- Delete row
DELETE FROM users
WHERE username = 'John';

DELETE FROM users
WHERE age < 18
ORDER BY username
LIMIT 100;

DELETE FROM users;  -- no WHERE clause => delete ALL rows

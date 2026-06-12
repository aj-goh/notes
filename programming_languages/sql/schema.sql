-- Create table
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,  -- AUTO_INCREMENT starts at 1 and increases by 1 per inserted row
    username VARCHAR(255) NOT NULL,     -- NOT NULL throws an error if NULL inserted
    age INT,                            -- common datatypes include INT, DATETIME, VARCHAR(max_length <= 8000) and TEXT for longer text
    email VARCHAR(255),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Update table
ALTER TABLE users
    RENAME TO employees,                  -- rename table

    ADD country VARCHAR(255),             -- create column
    ADD country VARCHAR(255) FIRST,       -- specify column position
    ADD country VARCHAR(255) AFTER age,

    MODIFY COLUMN email TEXT,             -- change column datatype
    RENAME COLUMN email TO user_email,    -- rename column
    CHANGE COLUMN email user_email TEXT,  -- change datatype and rename

    ALTER COLUMN age SET DEFAULT 0,       -- add/change default value
    ALTER COLUMN age DROP DEFAULT,        -- remove default value

    DROP COLUMN email;                    -- delete column

-- Delete table
DROP TABLE users;
DROP TABLE IF EXISTS users;  -- prevents error if table doesn't exist yet
TRUNCATE TABLE users;        -- deletes all rows from table, not the table itself

-- Constraints
CREATE TABLE my_table (
    col1 INT NULL,              -- allows column to have NULL values
    col2 INT NOT NULL,          -- ensures column cannot have NULL values
    col3 INT UNIQUE,            -- ensures all column values are unique
    col4 INT DEFAULT 0,         -- sets default value if no value specified on insertion
    col5 INT PRIMARY KEY,       -- uniquely identifies each row (NOT NULL + UNIQUE)
    col6 INT AUTO_INCREMENT,    -- starts at 1 and increases by 1 per inserted row
    col7 INT CHECK (col7 > 0),  -- ensures all column values satisfy a condition

    CONSTRAINT fk_col1          -- create foreign key that references column from another table
        FOREIGN KEY (col1)      -- this is used to prevent actions that would destroy links between tables
        REFERENCES users(id)    -- eg. deleting users table when users.id is referenced by orders.user_id

        ON DELETE RESTRICT      -- (default) prevents deletion of parent row if any child row references it
        ON DELETE NO ACTION     -- identical to ON DELETE RESTRICT
        ON DELETE CASCADE       -- deletes child rows automatically when parent row is deleted
        ON DELETE SET NULL      -- sets foreign key value to NULL (column must be nullable)
        ON DELETE SET DEFAULT   -- sets foreign key value to its default value (column must have default value)
);

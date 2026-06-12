-- If function
SELECT
    username,
    IF(age >= 18, 'Adult', 'Child') AS age_group
FROM users;

-- Case clause
SELECT
    username,
    CASE
        WHEN age >= 18 THEN 'Adult'
        ELSE 'Child'
        END AS age_group
FROM users;

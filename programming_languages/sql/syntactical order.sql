-- Syntactical order
SELECT DISTINCT department_id
FROM employees
JOIN orders
    ON customers.customer_id = orders.customer_id
WHERE salary > 3000
GROUP BY department
HAVING AVG(salary) > 5000
ORDER BY department
LIMIT 10 OFFSET 5;

/*
Query execution stages:

1. FROM/JOIN:  Specifies the tables from which to retrieve data
2. WHERE:      Filters the rows that meet the condition before grouping
3. GROUP BY:   Groups rows that share a property
4. HAVING:     Filters groups based on conditions, applied after grouping
5. SELECT:     Specifies the columns to retrieve or calculate
6. DISTINCT:   Removes duplicate rows from the result set
7. ORDER BY:   Sorts the result set by specified columns
8. LIMIT:      Specifies the maximum number of rows to return
9. OFFSET:     Specifies how many rows to skip before starting to return rows
*/

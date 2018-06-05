/*  https://www.codewars.com/kata/sql-basics-simple-exists/sql

For this challenge you need to create a SELECT statement, this SELECT statement will use an EXISTS to check whether a department has had a sale with a price over 98.00 dollars.

departments table schema
id
name
sales table schema
id
department_id (department foreign key)
name
price
card_name
card_number
transaction_date
resultant table schema
id
name
NOTE: Your solution should use pure SQL. Ruby is used within the test cases to do the actual testing.
*/

select d.*
from departments d
where exists(select 1 from sales s where s.department_id = d.id and price > 98);
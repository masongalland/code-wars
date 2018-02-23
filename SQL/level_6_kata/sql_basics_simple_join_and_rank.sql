-- http://www.codewars.com/kata/sql-basics-simple-join-and-rank

-- For this challenge you need to create a simple SELECT statement that will return all columns from the people table, and join to the sales table so that you can return the COUNT of all sales and RANK each person by their sale_count.

-- people table schema
-- id
-- name
-- sales table schema
-- id
-- people_id
-- sale
-- price
-- You should return all people fields as well as the sale count as "sale_count" and the rank as "sale_rank".


select p.id, p.name, count(*) as sale_count, rank ()over(order by count(*) desc) as sale_rank
from people p
join sales s on p.id = s.people_id
group by p.id;
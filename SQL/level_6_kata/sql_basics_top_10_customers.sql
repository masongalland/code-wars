-- http://www.codewars.com/kata/sql-basics-top-10-customers-by-total-payments-amount/sql

-- For this kata we will be using the DVD Rental database.

-- Your are working for a company that wants to reward its top 10 customers with a free gift. You have been asked to generate a simple report that returns the top 10 customers by total amount spent. Total number of payments has also been requested.

-- The query should output the following columns:

-- customer_id [int4]
-- email [varchar]
-- payments_count [int]
-- total_amount [float]
-- and has the following requirements:

-- only returns the 10 top customers, ordered by total amount spent
-- Database Schema
-- Database Schema

select c.customer_id, email, count(*) as payments_count, sum(amount)::float as total_amount
from customer as c
join payment as p
  on p.customer_id = c.customer_id
group by c.customer_id
order by total_amount desc
limit 10;

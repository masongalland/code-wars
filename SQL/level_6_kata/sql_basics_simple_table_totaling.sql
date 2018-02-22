-- http://www.codewars.com/kata/sql-basics-simple-table-totaling/sql

-- For this challenge you need to create a simple query to display each unique clan with their total points and ranked by their total points.

-- people table schema
-- name
-- points
-- clan
-- You should then return a table that resembles below

-- select on
-- rank
-- clan
-- total_points
-- total_people
-- The query must rank each clan by their total_points, you must return each unqiue clan and if there is no clan name you must replace it with [no clan specified], you must sum the total_points for each clan and the total_people within that clan.

-- ##Note The data is loaded from the live leaderboard, this means values will change but also could cause the kata to time out retreiving the information.

update people
set clan = '[no clan specified]'
where clan = '';

select rank()over(order by sum(points)desc) as rank, clan, sum(points) as total_points, count(*) as total_people
from people
group by clan;

-- alternative solution with out using update query


select RANK() over (order by sum(points) desc),
  coalesce(nullif(clan,''), '[no clan specified]') as clan,
  sum(points) as total_points,
  count(*) as total_people
from people
groub by clan
order by total_points desc;
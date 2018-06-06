/*  https://www.codewars.com/kata/sql-basics-simple-view/sql

For this challenge you need to create a VIEW. This VIEW is used by a sales store to give out vouches to members who have spent over $1000 in departments that have brought in more than $10000 total ordered by the members id. The VIEW must be called members_approved_for_voucher then you must create a SELECT query using the view.

Tables and relationship below:

resultant table schema
id
name
email
total_spending

*/

create view members_approved_for_voucher as
select m.id, m.name, m.email, sum(p.price) as total_spending
from sales s
join members m on s.member_id = m.id
join products p on p.id = s.product_id
where s.department_id in (select sales.department_id
                          from sales
                          join products on products.id = sales.product_id
                          group by sales.department_id
                          having sum(products.price) > 10000)
group by m.id
having sum(p.price) > 1000
order by m.id;

select * from members_approved_for_voucher;